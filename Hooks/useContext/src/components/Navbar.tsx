import { NavLink } from "react-router-dom"
import '../index.css'

export const Navbar = () => {
    return(
        <>
            <div className="">
                <nav className="bg-green-600 flex justify-around p-5 items-center" >
                    <h1 className="text-5xl font-bold text-yellow-400">UseContext</h1>
                    <ul className="flex gap-5 text-xl text-white">
                        <li>
                            <NavLink to={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contato"}>
                                contato
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}