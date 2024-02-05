
function CartAndSignUp({ openCart, cartLength }) {
  
  return (
    <div className='flex gap-5'>
      <div className='relative cursor-pointer' onClick={openCart}>
      <img src="icons/cart.svg" alt="cart" className='w-[35px] cursor-pointer'/>
      <p className='absolute top-[-1rem] right-[-0.5rem] bg-gray-950 text-white w-7 h-7 font-semibold text-lg text-center rounded-full'>{cartLength}</p>
      </div>
      <button className='px-4 py-1 text-white bg-green-500 hover:opacity-80 text-md font-semibold rounded-3xl text-center'>SIGN UP</button>
    </div>
  )
}

export default CartAndSignUp