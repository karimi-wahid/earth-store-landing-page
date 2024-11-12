import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="flex justify-center items-center flex-col space-y-5 bg-center bg-cover lg:h-screen h-[50vh]"
      style={{
        backgroundImage: `url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Contact-Banner.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <h1 className="text-4xl lg:text-8xl tracking-widest text-primary">EARTH</h1>
      <p className="text-xl lg:text-2xl font-[500] uppercase lg:tracking-[15px]">
        Multipurpose Store
      </p>
      <button className="btn w-40">
        <Link to="/shop">SHOP NOW</Link>
      </button>
    </section>
  );
};

export default Hero;
