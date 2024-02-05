import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from "./Footer"
import { useState } from "react"
import Cart from "../NavBar/Cart"


function Layout() {
  const [cartIsClicked, setCartIsClicked] = useState(false);
  const [cart, setCart] = useState([
    {
      "id": 1,
      "name": "Apple",
      "category": "Fresh Produce",
      "price": 1.99,
      "image": "images/apple-3.jpg"
    },
  ])

  function openCart() {
    setCartIsClicked(state => !state)
  }

  function closeCart() {
    setCartIsClicked(state => !state)
  }
  return (
    <>
        <NavBar cartIsClicked={cartIsClicked} setCartIsClicked={setCartIsClicked} openCart={openCart} cartLength={cart.length}/>
        <Outlet context={[cart, setCart]}/>
        <Footer />
        {
          cartIsClicked ? <Cart closeCart={closeCart} cart={cart} setCart={setCart}/> : null
        }
    </>
  )
}

export default Layout