import React from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ filteredType, id }) => {
  const filteredTypes = filteredType.filter((item) => item.id !== parseInt(id));

  return (
    <div className="my-10 w-full">
      <h1 className="text-xl lg:text-4xl font-semibold">Related products</h1>

      <div className="w-full">
        <div className="w-full flex items-center gap-5 my-10 mb-20 flex-wrap">
          {filteredTypes.map((item, index) => (
            <Link
              to={`/product/${item.type.toLowerCase()}/${item.id}`}
              key={index}>
              <img src={item.imgUrl} className="h-[200px] w-[200px]" />
              <div>
                <p className="text-[14px] text-secondary mt-2">{item.type}</p>
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-secondary">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
