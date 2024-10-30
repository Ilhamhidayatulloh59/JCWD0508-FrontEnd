import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-teal-500 flex gap-4 justify-center items-center h-[60px] text-white">
      <Link className="hover:text-gray-500" to={"/"}>
        Home
      </Link>
      <Link className="hover:text-gray-500" to={"/register"}>
        Register
      </Link>
    </div>
  );
}

export default Navbar;
