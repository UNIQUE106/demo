
function ImgDiv({ image, name }) {
  return (
    <div className="md:w-[450px] md:h-[320px]">
        <img src={image} alt={`A ${name}`} className="w-full h-full object-cover rounded-xl"/>
    </div>
  )
}

export default ImgDiv