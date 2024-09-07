import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-4 p-4">Cart</h1>
      <div className="w-6/12 ml-64 pl-64">
        <div>
          {items.map((items) => (
            <div
              data-testid="cartItemList"
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
                  <button className="bg-white shadow-lg mx-4 px-4 item-center rounded-lg">
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
      </div>
      <button
        className="m-4 p-4 bg-red-200 rounded-full"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {items.length == 0 && <div>Please add items</div>}
    </div>
  );
};

export default Cart;
