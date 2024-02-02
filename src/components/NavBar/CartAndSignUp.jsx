import React from 'react'

function CartAndSignUp() {
  return (
    <div className='flex gap-5'>
      <img src="icons/cart.svg" alt="cart" className='w-[25px]' />
      <button className='px-4 py-1 text-white bg-green-500 hover:opacity-80 text-md font-semibold rounded-3xl text-center'>SIGN UP</button>
    </div>
  )
}

export default CartAndSignUp