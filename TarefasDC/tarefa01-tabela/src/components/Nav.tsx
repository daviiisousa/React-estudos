import { NavLink } from "react-router-dom";
import { LiNav } from "./LiNav";


export const Nav = () => {
  return (
    <>
      <nav className="flex justify-around items-center bg-red-600 py-5">
        <NavLink to={"/"}>
          <h1 className="text-5xl font-bold text-white">Caps</h1>
        </NavLink>
        <ul className="flex gap-5 text-lg text-white ">
          <NavLink to={"/formulario"}>
            <LiNav>Formulario</LiNav>
          </NavLink>
          <NavLink to={"/usuarios"}>
            <LiNav>Usuarios</LiNav>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
