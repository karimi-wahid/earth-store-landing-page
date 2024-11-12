import React from "react";

const Mission = () => {
  return (
    <section className="w-full grid place-items-center">
      <div className="flex justify-around items-center flex-wrap p-5">
        <div>
          <img
            src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Our-Mission-min-1024x762.jpg"
            alt="img"
            className="h-[400px]"
          />
        </div>
        <div className="h-[400px] w-full lg:w-[50%] space-y-5 mt-16">
          <h1 className="font-[600] text-4xl">OUR MISSION</h1>
          <p className="w-[90%] lg:w-[70%] text-secondary text-[14px]">
            Hello, my name is Tyler Moore and with the help of many people I
            made this template. I made it so it is super easy to update and so
            that it flows perfectly with my tutorials. Lots of love and hundreds
            of hours went into making it. I hope you love it as much as I do.
          </p>
          <p className="w-[90%] lg:w-[70%] text-[14px] text-secondary">
            I wish you the best of luck with your business, enjoy the adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
