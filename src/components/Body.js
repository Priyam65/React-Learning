import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const ResPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    // console.log("use effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    //https://www.swiggy.com/mapi/homepage/getCards?lat=12.9654796&lng=77.7184638
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9621948&lng=77.7115841"
    );
    const json = await data.json();
    console.log(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListRes(
      json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );

    setFilterRes(
      json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return <h1>Your are Offline!! Check your internet connection.</h1>;

  const { loggedUser, setUserName } = useContext(UserContext);

  return listRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-2 px-2 py-1 bg-green-200 rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filterSearch = listRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRes(filterSearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-2 py-1.5 bg-green-300 text-white hover:bg-green-500 rounded-lg"
            onClick={() => {
              const filteredList = listRes.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilterRes(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <label>UserName</label>
          <input
            className="border border-black rounded-lg"
            value={loggedUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap ml-14">
        {filterRes.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            {resturant?.info?.promoted ? (
              <ResPromoted resData={resturant} />
            ) : (
              <ResturantCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
