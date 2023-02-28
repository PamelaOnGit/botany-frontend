import { Link } from "react-router-dom"

function Navbar() { 
  return <>
    <header>
      <nav>

        <div className="navbar is-transparent navbar-styles">
          <div>
            <div className="navbar-brand">
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