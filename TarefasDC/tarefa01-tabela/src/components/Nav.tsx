import { NavLink } from "react-router-dom";
import { LiNav } from "./LiNav";
import { CircleUserRound } from "lucide-react";

export const Nav = () => {
  return (
    <>
      <nav className="flex justify-between px-12 items-center bg-red-600 py-5">
        <div className="flex gap-5 items-center">
          <NavLink to={"/"}>
            <h1 className="text-5xl font-bold text-white">Caps</h1>
          </NavLink>
          <input
            type="text"
            className="w-[700px] bg-white px-5 py-3 rounded-md"
            placeholder="O que deseja encontrar?"
          />
        </div>
        <ul className="flex gap-5 text-lg items-center text-white ">
          <NavLink to={"/remedios"}>
            <LiNav>Remedios</LiNav>
          </NavLink>
          <NavLink to={"/usuarios"}>
            <LiNav>
              <CircleUserRound size={40} />
            </LiNav>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
