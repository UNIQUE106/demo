import { Link, useOutletContext } from "react-router-dom"

function Card({ image, name, price, id }) {
  const [cart, setCart] = useOutletContext()

  function addToCart() {
    setCart([
      ...cart,
          {
            "id": id,
            "name": name,
            "category": "Fresh Produce",
            "price": price,
            "image": image
          },
    ])
  }

  return (
    <div>
        <Link to={`/store/${name.toLowerCase()}`}><div className='relative w-[300px] h-[250px] rounded-2xl cursor-pointer overflow-hidden bg-[rgba(15,23,42,0.8)] hover:bg-[rgba(15,23,42)] mb-3'>
            <img src={image} alt={name} loading="lazy" className='w-full h-full rounded-2xl object-cover hover:scale-125 hover:transition-all duration-300'/>
            <div className='absolute bottom-0 p-5 flex justify-between w-full text-white bg-inherit text-xl'>
                <h3 className='font-semibold'>{name}</h3>
                <p>${price}</p>
            </div>
        </div></Link>
        <button className='bg-green-700 text-white flex gap-3 py-2 px-3 items-center hover:rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-green-600 duration-300' onClick={addToCart}>Add To Cart<img src="icons/cart-white.svg" alt="add to cart" className='w-[20px]'/></button>
    </div>
  )
}

export default Card