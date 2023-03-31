import "./NavBar.css";
import { BsCart4 } from "react-icons/bs";

const header = () => {
  return (
    <>
      <nav>
        <img
          className="logoWeb"
          src="https://res.cloudinary.com/dp7bf4xou/image/upload/v1680227371/purple-trolley-and-ecommerce_qxskoe.webp"
          alt=""
        />
        <ul>
          <li>
            {" "}
            <a href="">Categoria 1</a>{" "}
          </li>
          <li>
            <a href="">Categoria 2</a>{" "}
          </li>
          <li>
            <a href="">Categoria 3</a>{" "}
          </li>
        </ul>
        <div>
          <span className="logoCarrito">
            <BsCart4 size={40} />
          </span>
          <span className="contador">0</span>
        </div>
      </nav>
    </>
  );
};

export default header;
