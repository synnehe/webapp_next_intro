import type { Product } from "@/features/types"
import React from 'react';

type CartProductProps = {
  cartItems: Product[],
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>,
  sum: number,
  setSum: React.Dispatch<React.SetStateAction<number>>,
}

export default function CartProduct({ cartItems, setCartItems, sum, setSum }: CartProductProps) {

  function handleCart(action: "increment" | "decrement" | "delete", id: number) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        if (action === "decrement" && cartItem.quantity > 1) {
          setSum(sum - cartItem.price)
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else if (action === "increment") {
          setSum(sum + cartItem.price)
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else if (action === "decrement" && cartItem.quantity === 1){
          action = "delete"
        }
      }
      return cartItem;
    });

    if (action === "delete") {
      const deletedItem = updatedCartItems.filter((cartItem) => cartItem.id === id)
      console.log(deletedItem)
      setSum(sum - (deletedItem[0].price * deletedItem[0].quantity))
      setCartItems(updatedCartItems.filter((cartItem) => cartItem.id !== id));
    } else {
      setCartItems(updatedCartItems);
    }
  }

  return (
    <>
      {cartItems.map((item: Product, i: number) => (
        <div id="cart-product" key={`product-${i}`}>
          <button id="add" onClick={() => { handleCart("increment", item.id) }}>+</button>
          <button id="decrement" onClick={() => { handleCart("decrement", item.id) }}>-</button>
          <p id="count">{item.quantity}</p>
          <p>{item.title}</p>
          <p id="price">{item.price}kr</p>
          <button id="delete" onClick={() => { handleCart("delete", item.id) }}>x</button>
        </div>
      ))}
    </>
  )
}