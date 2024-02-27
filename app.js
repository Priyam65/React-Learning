import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "react tags"),
//       React.createElement("h2", {}, "Hi React"),
//     ]),
//   ],
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "react tags1"),
//     React.createElement("h2", {}, "Hi React1"),
//   ])
// );

// // const heading = React.createElement("h1", { id: "heading" }, "Hello React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement("h1", { id: "heading" }, "This is React");
// const Title = () => <h1 className="heading">This is React using jsx</h1>;

// const number = 1000;
// //React functional component
// const HeadingComponent = () => (
//   <div id="container">
//     {Title()}
//     <h1 id="heading">React functional component </h1>
//   </div>
// );

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg"
        />
        <h1 className="logo-name">Fooder</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "590579",
      name: "vaibhav biriyani",
      cloudinaryImageId: "0c93f7caf3c7dba0567df27eb5279493",
      locality: "1st Block",
      areaName: "Rajajinagar",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Indian"],
      avgRating: 4,
      parentId: "353201",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=11379363~p=1~eid=0000018d-c7f5-4ba1-1479-914100e30118~srvts=1708456758177~69584",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "₹75 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT75 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/vaibhav-biriyani-1st-block-rajajinagar-bangalore-590579",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "23818",
      name: "Domino's Pizza",
      cloudinaryImageId: "gt1qlbsgaklbzlg0olga",
      locality: "Bull Temple Road",
      areaName: "Basavanagudi",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-bull-temple-road-basavanagudi-bangalore-23818",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "3241",
      name: "Meghana Foods",
      cloudinaryImageId: "z5zp6cisie3mlpswfl0w",
      locality: "Residency Road",
      areaName: "Residency Road",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
      avgRating: 4.6,
      parentId: "635",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=11364347~p=2~eid=0000018d-c7f5-4ba1-1479-914200e30263~srvts=1708456758177~69584",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 01:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        shortDescriptionList: [
          {
            meta: "Free Coke(250ml)",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Free Coke(250ml) on orders above ₹550",
            discountType: "Freebie",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/meghana-foods-residency-road-bangalore-3241",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "77949",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Gandhi Bazar",
      areaName: "Basavanagudi",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        shortDescriptionList: [
          {
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get items under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-gandhi-bazar-basavanagudi-bangalore-77949",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "805717",
      name: "Zaika of Bengal",
      cloudinaryImageId: "8d0093e18616d9395766ec9bdd7b6d2d",
      locality: " Cashier Layout",
      areaName: "Tavarekere",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Bengali", "Chinese"],
      avgRating: 3.7,
      parentId: "480792",
      avgRatingString: "3.7",
      totalRatingsString: "20+",
      promoted: true,
      adTrackingId:
        "cid=11338357~p=3~eid=0000018d-c7f5-4ba1-1479-914300e3031d~srvts=1708456758177~69584",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/zaika-of-bengal-cashier-layout-tavarekere-bangalore-805717",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "10575",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Shanti Nagar",
      areaName: "Shanti Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get items under 179",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "782470",
      name: "Bowring Kulfi & Ice Cream",
      cloudinaryImageId: "253178fa1b6a22b7a0cdc1ab120db628",
      locality: "B B M P South",
      areaName: "Jayanagar",
      costForTwo: "₹100 for two",
      cuisines: ["Ice Cream"],
      veg: true,
      parentId: "465516",
      avgRatingString: "NEW",
      promoted: true,
      adTrackingId:
        "cid=11336689~p=4~eid=0000018d-c7f5-4ba1-1479-914400e30470~srvts=1708456758177~69584",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bowring-kulfi-and-ice-cream-b-b-m-p-south-jayanagar-bangalore-782470",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "395202",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "rqdtdkc3iqzxodv6vtyf",
      locality: "Kasturba Road",
      areaName: "MG Road",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", " Desserts"],
      avgRating: 4.1,
      parentId: "10761",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 02:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-kasturba-road-mg-road-bangalore-395202",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "50571",
      name: "Taj Hotel",
      cloudinaryImageId: "wfol02cizu1pb7mq6oxr",
      locality: "Jumma Masjid Road",
      areaName: "Shivajinagar",
      costForTwo: "₹500 for two",
      cuisines: ["Chinese", "Mughlai"],
      avgRating: 4.2,
      parentId: "21656",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=11335945~p=5~eid=0000018d-c7f5-4ba1-1479-914500e30513~srvts=1708456758177~69584",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-21 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d2f2de9-bab6-4293-83a0-2a90ff3d9446",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/taj-hotel-jumma-masjid-road-shivajinagar-bangalore-50571",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
