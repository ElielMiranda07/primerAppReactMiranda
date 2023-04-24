import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className={styles.containerNavbar}>
        <Link to={"/"}>
          <img
            className={styles.logoWeb}
            src="https://res.cloudinary.com/dp7bf4xou/image/upload/v1680227371/purple-trolley-and-ecommerce_qxskoe.webp"
            alt=""
          />
        </Link>
        <ul>
          <li>
            <Link to={"/"}>Todas</Link>
          </li>
          <li>
            <Link to={"/category/diseñador"}>Diseñador</Link>
          </li>
          <li>
            <Link to={"/category/moderna"}>Moderna</Link>
          </li>
        </ul>
        <div>
          <CartWidget />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
