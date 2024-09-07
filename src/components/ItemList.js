import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };
  console.log(items);
  return (
    <div>
      {items.map((items) => (
        <div
          data-testid="foodItems"
          key={items.card.info.id}
          className="p-4 m-4 border-gray-300 border-b text-left flex justify-between"
        >
          <div className="w-9/12">
            <span className="font-bold">{items.card.info.name}</span>
            <div>
              <span className="py-2 font-bold">
                ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>
              <span className="text-sm">{items.card.info.description}</span>
            </p>
          </div>

          <div className="w-3/12">
            <div className="absolute">
              <button
                className="bg-white shadow-lg mx-8 px-8 item-center rounded-lg"
                onClick={() => handleAddItem(items)}
              >
                Add
              </button>
            </div>
            <img
              className="rounded-lg"
              src={CDN_URL + items.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
