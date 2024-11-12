import React from "react";
import { Link } from "react-router-dom";

const GiftPostCard = () => {
  return (
    <section
      className="flex justify-center items-center flex-col space-y-5 bg-center bg-cover h-[30vh] lg:h-[60vh] text-center"
      style={{
        backgroundImage: `url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Contact-Banner.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <h1 className="text-xl lg:text-4xl uppercase text-primary">
        Give the Gift of a Postcard
      </h1>
      <p className="uppercase">
        Give the gift of a lasting memory with a postcard
      </p>
      <button className="btn">
        <Link to="/shop">PURCHASE A POSTCARD</Link>
      </button>
    </section>
  );
};

export default GiftPostCard;
