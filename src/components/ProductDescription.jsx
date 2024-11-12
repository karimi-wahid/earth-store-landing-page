import React from "react";

const ProductDescription = ({ postDesc, paperDesc }) => {
  return (
    <div className="w-full">
      <div className="text-secondary">
        <h1 className="font-semibold mb-1">Paper Type: Matte</h1>
        <ul className="list-disc mb-5">
          {postDesc.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>
      </div>
      <div className="text-secondary">
        <h1 className="font-semibold mb-1">Paper Type: Semi-Gloss</h1>
        <ul className="list-disc mb-5">
          {paperDesc.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>
      </div>
      <p className="text-secondary">
        <b>Note:</b> There may be a slight difference in actual color, due to
        the colors of display.
      </p>
    </div>
  );
};

export default ProductDescription;
