import logoimg from '../../assets/react.svg'
import './style.css'

const Navbar = () => {
    return(
        <>
      <header>
        <nav className="navbar">
          <div className="titulo">
            <img src={logoimg} alt="" />
            <h1>React</h1>
          </div>

          <ul className='ul-lista'>
            <li><a href="#">home</a></li>
            <li><a href="#">topicos</a></li>
            <li><a href="#">contato</a></li>
          </ul>
        </nav>
      </header>
        </>
    )
}

export default Navbar;