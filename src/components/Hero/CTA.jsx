import { Link } from "react-router-dom"

function CTA() {
  return (
    <div className='absolute text-center py-12 top-[33%] mx-auto left-0 right-0  md:w-[600px] w-[300px] bg-[#eeeeeeb9] flex flex-col gap-5 items-center rounded-tr-[10rem] rounded-bl-[10rem]'>
        <h3 className='font-extrabold text-xl font-lato text-green-900'>ORGANIC FOOD</h3>
        <p className='text-5xl font-mont'>Be Healthy. Eat <span className="text-green-700">Fresh</span> Today!</p>
        <Link to="/store"><button className='bg-green-600 text-white px-6 py-3 hover:bg-green-700 duration-300 hover:scale-90'>SHOP NOW</button></Link>
    </div>
  )
}

export default CTA