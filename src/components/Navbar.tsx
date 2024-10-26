import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 h-auto w-full bg-[#131111] bg-opacity-85 p-2 text-2xl font-bold text-white shadow-white drop-shadow-xl backdrop-blur">
      <Link to={"/"} className="mx-5 flex w-[30%] items-center">
        <img src={Logo} alt="Logo" className="w-[10%]" />
        <div className="mx-5 cursor-pointer">Zodiac Viewer</div>
      </Link>
    </div>
  );
};

export default Navbar;
