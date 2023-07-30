import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <div className="pt-6">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default MainLayout;
