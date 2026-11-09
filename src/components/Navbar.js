import { Link } from "react-router-dom";
import { FaCrown, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        Complimentary shipping on all orders
      </div>

      <nav className="navbar navbar-expand-lg sticky-top boutique-navbar">
        <div className="container-fluid px-4">
          <Link className="navbar-brand boutique-brand" to="/">
            <FaCrown className="brand-crown me-2" />
            MAISON AVELINE
          </Link>

          <button
            className="navbar-toggler boutique-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/product" className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/quiz" className="nav-link">Style Quiz</Link>
              </li>
            </ul>

            <Link
              to="/measurement"
              className="btn btn-boutique ms-lg-3 my-2 my-lg-0"
            >
              Measurements
            </Link>

            <div className="icons boutique-icons ms-lg-3">
              <Link to="/wishlist" aria-label="Wishlist"><FaHeart /></Link>
              <Link to="/cart" aria-label="Shopping cart"><FaShoppingBag /></Link>
              <Link to="/account" aria-label="Account"><FaUser /></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
