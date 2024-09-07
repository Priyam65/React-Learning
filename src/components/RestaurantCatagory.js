import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCatagory = ({
  data,
  showItems,
  setShowIndex,
  setAccordIsOpen,
}) => {
  // const [accordIsOpen, setAccordIsOpen] = useState(false);

  const handleClick = () => {
    setAccordIsOpen();
    setShowIndex();
  };
  return (
    <div>
      <div
        data-testid="resCatagory"
        className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-md "
      >
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {/* {accordIsOpen == true ? <span>🔼</span> : <span>🔽</span>} */}
          <span>🔼</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCatagory;
