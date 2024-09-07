import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [accordIsOpen, setAccordIsOpen] = useState(false);

  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  if (resData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      {categories.map((catagory, index) => (
        <RestaurantCatagory
          key={catagory?.card?.card.title}
          data={catagory?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          setAccordIsOpen={() => setAccordIsOpen(!accordIsOpen)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
