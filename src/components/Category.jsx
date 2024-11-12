import React, { useState } from "react";

const Category = ({ setCategory, lengthArr }) => {
  const categories = ["All", "PostCard", "Poster"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="text-primary">
      <h1 className="text-xl mb-5 font-[600] border-b border-primary w-2/4 pb-3">
        Categories
      </h1>
      {categories.map((category, index) => (
        <p
          key={index}
          className={`${
            selectedCategory === category
              ? "text-blue-700 bg-triple mb-3 py-1 text-center w-28 rounded-full"
              : "text-primary text-[16px] mb-3"
          } cursor-pointer`}
          onClick={() => handleCategoryClick(category)}>
          {category}({lengthArr[index]})
        </p>
      ))}
    </div>
  );
};

export default Category;
