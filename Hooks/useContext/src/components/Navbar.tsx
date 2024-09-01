import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
        <>
            <div className="">
                <nav className="bg-green-600" >
                    <h1>UseContext</h1>
                    <ul>
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