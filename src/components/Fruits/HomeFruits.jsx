import { Link } from "react-router-dom";
import data from "../../data/fruits.json";
import Card from "../Featured/Card";

function HomeFruits() {
  return (
    <div className="mt-10 mb-24 px-10 flex flex-col">
      <h2 className="text-3xl font-semibold font-mont mb-5">Fruits</h2>
      <div className="flex gap-1 flex-wrap">
        {data.fruits.slice(10, 14).map((item) => {
          return (
            <Card
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
      <Link to="/store/fruits" className="self-center">
        <button className="rounded-3xl mt-10 py-2 px-6  bg-gray-950 text-white">See More</button>
      </Link>
    </div>
  );
}

export default HomeFruits;
