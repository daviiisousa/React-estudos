import { NavLink } from "react-router-dom";
import "../../index.css";

export const Headear = () => {
  return (
    <>
      <header className="bg-blue-950 p-7">
        <nav className="mx-10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-white text-4xl font-bold">
                <NavLink to={"/"}>Organice</NavLink>
            </h1>
            <span className="material-symbols-outlined text-white h-4">
              receipt_long
            </span>
          </div>
          <div>
            <ul className="flex gap-5">
              <li className="text-white text-xl">
                <NavLink to={"/"}>Form</NavLink>
              </li>
              <li className="text-white text-xl">
                <NavLink to={"/Home"}>Home</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
