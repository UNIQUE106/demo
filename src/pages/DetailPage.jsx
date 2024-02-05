import ImgDiv from "../components/Details/ImgDiv"
import InfoDiv from "../components/details/InfoDiv"
import data from "../data/fullData.json"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function DetailPage() {
  const { name } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    const foundItem = data.full.find(item => item.name.toLowerCase() === name.toLowerCase())
    console.log(foundItem)
    if(foundItem !== null) {
      setItem(foundItem)
    }
  }, [name])
  return (
    <div className="h-[90vh] md:py-32 md:px-12">
    <Link to="/"><button className="shadow-xl h-fit px-3 py-1 bg-gray-600 text-white rounded-lg hover:translate-x-[-0.5rem] hover:transition-all duration-[500ms] mb-3">Back</button></Link>
    <div className='flex md:gap-10 md:justify-center'>
      <ImgDiv image={item.image} name={item.name}/>
      <InfoDiv name={item.name} description={item.description} price={item.price}/>
    </div>
    </div>
  )
}

export default DetailPage