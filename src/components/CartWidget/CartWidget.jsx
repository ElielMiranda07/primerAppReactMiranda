import styles from "./CartWidget.module.css";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <span className={styles.logoCarrito}>
        <BsCart4 size={40} />
      </span>
      <span className={styles.contador}>0</span>
    </>
  );
};

export default CartWidget;
