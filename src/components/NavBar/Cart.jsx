import CartItem from "./CartItem"
import { useOutletContext } from "react-router-dom"

function Cart({closeCart, cart, setCart}) {
    const total = cart.reduce((acc, curr) => {
        return acc + curr.price
    }, 0)
  return (
    <div className="z-50 flex flex-col fixed top-0 right-0 bg-[#fff] h-[100vh] w-[30vw] p-5">
        <h1 className="cursor-pointer text-lg mb-5 text-green-900 font-extrabold" onClick={closeCart}>close</h1>
        <div className="overflow-y-auto flex flex-col gap-5">
        {cart.length <= 0 ? <h2 className="font-semibold text-2xl text-center text-gray-700">There are no items in cart</h2> : 
            cart.map(item => {
                return (
                    <CartItem key={item.id} name={item.name} image={item.image} price={item.price}/>
                )
            })
        }
        </div>
        <div className="mt-auto">
            <h2 className="text-2xl font-extrabold mb-2 flex">Total: <span className="ml-auto">${Math.ceil(total)}.00</span></h2>
            <button className="font-lato w-full bg-green-600 text-white py-2 hover:bg-green-800 hover:transition-all duration-300">CHECKOUT</button>
        </div>
    </div>
  )
}

export default Cart