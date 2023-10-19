"use client"

import { useState } from "react";
import CartProduct from "./CartProduct";
import type { Product } from "@/features/types";

type CartProps = {
  sum: number,
  setSum: React.Dispatch<React.SetStateAction<number>>,
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>,
};

export default function Cart({sum, setSum, cartItems, setCartItems}: CartProps) {

  type Visibility = "visible" | "hidden";

  const [cartVisibility, setCartVisibility] = useState<Visibility>("hidden")
  
  const toggleCart = (param: Visibility) => {
    setCartVisibility(param)
  }

  return(
    <>
    <div id="overlay" className={cartVisibility === "visible" ? "visible" : "hidden"}></div>
    <button id="show-cart" className={cartVisibility === "visible" ? "hidden" : "visible"} onClick={() => {toggleCart("visible")}}>Open cart {cartItems.length > 0 ? `(${cartItems.length})`: null}</button>
    <section id="cart" className={cartVisibility}>
      <div id="cart-header">
        <h2>Handlekurv</h2>
        <button type="button" id="close" onClick={() => {toggleCart("hidden")}}>Lukk</button>
      </div>
      <CartProduct cartItems={cartItems} setCartItems={setCartItems} sum={sum} setSum={setSum} />
      <p id="sum">Sum: {sum}kr</p>
      <button type="button" id="buy">Kjøp</button>
    </section>
    </>
  )
}