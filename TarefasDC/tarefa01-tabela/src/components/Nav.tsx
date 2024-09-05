import { NavLink } from "react-router-dom";
import { LiNav } from "./LiNav";
import { CircleUserRound } from "lucide-react";


export const Nav = () => {
  return (
    <>
      <nav className="flex justify-around items-center bg-red-600 py-5">
        <NavLink to={"/"}>
          <h1 className="text-5xl font-bold text-white">Caps</h1>
        </NavLink>
        <ul className="flex gap-5 text-lg items-center text-white ">
          <NavLink to={"/remedios"}>
            <LiNav>Remedios</LiNav>
          </NavLink>
          <NavLink to={"/usuarios"}>
            <LiNav><CircleUserRound size={40} /></LiNav>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
