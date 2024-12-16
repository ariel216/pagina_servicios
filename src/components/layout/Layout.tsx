import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
