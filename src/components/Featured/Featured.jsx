import data from "../../data/featured.json"
import Swiper from "./Swiper"

function Featured() {
  return (
    <div className="mt-10 mb-24 px-10">
      <h2 className="text-3xl font-semibold font-mont mb-5">Featured Goodies</h2>
      <Swiper items={data.featured}/>
    </div>
  )
}

export default Featured