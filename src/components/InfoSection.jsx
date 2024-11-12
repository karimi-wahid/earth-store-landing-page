import React from "react";

const InfoSection = ({ label }) => {
  return (
    <section
      className="h-[60vh] lg:h-[88vh] flex justify-center items-center"
      style={{
        backgroundImage: `url('https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Contact-Banner.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <h1 className="text-primary font-semibold tracking-widest text-4xl lg:text-6xl">
        {label}
      </h1>
    </section>
  );
};

export default InfoSection;
