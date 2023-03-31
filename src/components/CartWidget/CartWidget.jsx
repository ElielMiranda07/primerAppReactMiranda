import "./CartWidget.css";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <span className="logoCarrito">
        <BsCart4 size={40} />
      </span>
      <span className="contador">0</span>
    </>
  );
};

export default CartWidget;
