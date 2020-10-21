import * as React from "react";
import { CartsList } from "../style/WayOfTeaching";
import Cart from "./Cart";
const Carts = () => {
  return (
    <CartsList>
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </CartsList>
  );
};

export default Carts;
