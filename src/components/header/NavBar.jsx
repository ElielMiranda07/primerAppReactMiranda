import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

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
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

export default header;
