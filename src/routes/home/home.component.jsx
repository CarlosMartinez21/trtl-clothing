import Directory from "../../components/directory/directory.components";
import { Outlet } from "react-router-dom";

const Home = () => {
  return <Directory />;
  <Outlet />;
};

export default Home;
