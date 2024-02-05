import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Card from "./Card";
import { Link } from "react-router-dom";

register();

export default function Swiper({ items }) {
  const swiperElRef = useRef(null);

  

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="4"
        navigation="true"
      grab-cursor="true"
      free-mode="true"
      space-between=""
    >
      {items.map((item) => {
        return (
          <swiper-slide lazy="true">
            <Card key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}/>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
}
