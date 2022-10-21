import { takeLatest, put, call, all } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signOutFailed,
} from "./user.action";
import {
  getCurrentUser,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails = {}) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed);
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* googleUserAuthentication() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* emailUserAuthentication({ payload }) {
  try {
    const { email, password } = payload;

    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUpWithEmailAndPassword({ payload }) {
  try {
    const { email, password, displayName } = payload;
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
      displayName
    );
    yield call(getSnapshotFromUserAuth, user, { displayName: displayName });
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOutUserAsync({ payload }) {
  try {
    const { user } = payload;
    const newUser = yield call(signOutUser, user);
    yield put(signOutSuccess(newUser));
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* onEmailSignIn() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    emailUserAuthentication
  );
}

export function* onGoogleSignIn() {
  yield takeLatest(
    USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
    googleUserAuthentication
  );
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserSignUp() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpWithEmailAndPassword);
}

export function* onUserSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutUserAsync);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onUserSignUp),
    call(onUserSignOut),
  ]);
}
