import { Link } from "react-router-dom"
import  Logo from "../styles/resources/logo.png"

function Navbar() { 
  return <>
    <header>
      <nav>

        <div className="navbar is-transparent navbar-styles">

            <div className="navbar-brand">

              <div  className="logo-container">
              <Link to="/">
              <img src={Logo} alt="" />
              </Link>
              </div>
              
              <div className="navbar-item-container">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/kokedamas" className="navbar-item">
                Kokedamas
              </Link>
              <Link to="/basket" className="navbar-item">
                Basket
              </Link>
              </div>
            </div>

          </div>

      </nav>
    </header>
  </>
}

export default Navbar