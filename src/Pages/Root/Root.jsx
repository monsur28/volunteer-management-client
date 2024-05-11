import { Outlet } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar.jsx";
import Footer from "../../Layout/Footer/Footer.jsx";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
