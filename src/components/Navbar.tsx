import { Link } from "react-router-dom"

function Navbar() { 
  return <>
    <header>
      <nav>

        <div className="navbar is-light">
          <div>
            <div className="navbar-brand">
              <Link to="/" className="navbar-brand">
                Home
              </Link>
              <Link to="/kokedamas" className="navbar-brand">
                Kokedamas
              </Link>
              <Link to="/basket" className="navbar-brand">
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