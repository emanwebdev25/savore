import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Savoré
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/reservation" className="reservation-btn">
        Reserve a Table
      </Link>
    </nav>
  )
}

export default Navbar