import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
