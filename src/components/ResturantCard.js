import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[300px] rounded-md bg-gray-200 hover:bg-gray-300"
    >
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="break-words">{cuisines.join(",")}</h4>
      <h4>⭐{avgRatingString}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (resData) => {
    return (
      <div>
        <label className="absolute bg-black p-1 m-1 text-white rounded-md">
          Promoted
        </label>
        <ResturantCard {...resData} />
      </div>
    );
  };
};

export default ResturantCard;
