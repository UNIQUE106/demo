import QuantityBox from "../Misc/QuantityBox"

function InfoDiv({ name, description, price }) {
  return (
    <div className="flex flex-col gap-5">
        <h3 className="text-green-500 font-extrabold">UGROCERIES COMPANY</h3>
        <h2 className="text-5xl">{`${name}s`}</h2>
        <p className="text-gray-700 text-xl">{description}</p>
        <div className="flex flex-col">
            <div className="flex gap-[1.2rem] items-center">
                <h3 className="font-semibold text-xl">${price}</h3>
                <div className="bg-green-400 p-1 px-2 rounded-lg">
                    <p className="text-black font-extrabold">50%</p>
                </div>
            </div>
            <h4 className="old__price">${price + 20}</h4>
        </div>
        <div className="flex gap-5 mt-auto">
            <QuantityBox direction="row"/>
            <button className="w-full bg-green-500 text-white rounded-md py-2 font-semibold flex justify-center items-center gap-3">
                <img src="/icons/cart-white.svg" alt="cart icon" className="w-[20px]"/>
                Add To Cart</button>
        </div>
    </div>
  )
}

export default InfoDiv