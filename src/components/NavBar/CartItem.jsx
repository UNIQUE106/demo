import React from 'react'
import QuantityBox from '../Misc/QuantityBox'

function CartItem({ image, name, price}) {
  return (
    <div className='flex justify-between gap-5 items-center pr-5'>
        <div className='flex gap-5'>
          <img src={image} alt={name} className='md:w-[100px] md:h-[100px] rounded-sm'/>
          <div>
            <h4 className='font-semibold text-2xl uppercase font-lato'>{name}</h4>
            <p className='font-semibold text-xl text-gray-800'>${price}</p>
          </div>
        </div>
        <div className="">
          <QuantityBox direction="col"/>
        </div>
    </div>
  )
}

export default CartItem