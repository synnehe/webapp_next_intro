"use client"

import type { Product } from "@/features/types"
//import { createProducts } from "@/features/generateContent"
import { useCallback, useEffect, useState } from "react"
import Cart from "./Cart"

export default function ProductCard(){

  //const initialProducts: Product[] = createProducts()

  const [products, setProducts] = useState<Product[]>([])
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [sum, setSum] = useState<number>(0)

  const callback = useCallback(() => {
    function addProduct(){
      // NEXT INTRODUKSJON OPPGAVE
      const productToBePosted = [{
        id: 1,
        title: "Crying Plant Pot",
        description: "A quirky and endearing addition to your home decor, this plant pot appears to shed tears when your greenery is in need of a drink, adding a touch of emotion to your indoor garden.",
        price: 526,
        quantity: 1
      }]
  
      async function postProduct(data: Product[]) {
        const response = await fetch("http://localhost:3000/api/products", {method: "POST", body: JSON.stringify(data)}
        )
        return response.json()
      }
      
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      postProduct(productToBePosted)
    }
    addProduct()
  },[])

  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch("http://localhost:3000/api/products", {method: "GET"})

      const result = (await response.json()) as {data: Product[]}

      setProducts(result.data)
    }

    // Fant metoden fra sammendraget fra forelesning 17.10
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchProducts()
  },[callback])

  function addCartItem(product: Product){
    cartItems.some(item => item.id === product.id) ? console.log("update quantity") : setCartItems([...cartItems, product])
    setSum(sum + product.price)
  }

  const handleAddToCart = (product: Product) => {
    addCartItem(product);
  };

  return(
    <>
    <button id="add-product" type="button" onClick={callback}>Add product</button>
    <p id="refresh-message">(Refresh to see new product)</p>
    {
      products.map((product, i) => (
        <article id="product-card" key={`article ${i}`}>
        <div>
          <h2 id="title">{product.title}</h2>
          <p id="description">{product.description}</p>
        </div>
        <div>
          <p id="price">{product.price}kr</p>
          <button id="add-to-cart" type="button" onClick={() => {handleAddToCart(product)}}>Legg i handlekurv</button>
        </div>
      </article>
      ))
    }
    <Cart sum={sum} cartItems={cartItems} setCartItems={setCartItems} setSum={setSum}/>
    </>
  )
}
