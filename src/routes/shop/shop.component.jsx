import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.action.js";
import { fetchCategoriesAsync } from "../../store/categories/category.action.js";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
