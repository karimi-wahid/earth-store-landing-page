import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import ShopCard from "../components/ShopCard";
import { posters } from "../Data";
import Category from "../components/Category";

const Shop = () => {
  const [inputValue, setInputValue] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState(posters);
  let posterLength = posters.filter((item) => item.type == "Poster").length;
  let postCardLength = posters.filter((item) => item.type == "PostCard").length;
  let allLength = posters.length;
  let lengthArr = [allLength, posterLength, postCardLength];

  useEffect(() => {
    let filteredData = [...posters];

    if (inputValue) {
      filteredData = posters.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(filteredData);
    }
    if (category) {
      if (category == "All") {
        setFilteredData(filteredData);
      } else {
        filteredData = posters.filter(
          (item) => item.type.toLowerCase() == category.toLowerCase()
        );
        setFilteredData(filteredData);
      }
    }
    if (optionValue) {
      if (optionValue === "default") {
        setFilteredData(filteredData);
      } else if (optionValue === "lowToHigh") {
        // Sorting data from low to high based on price
        const sortedData = filteredData
          .slice()
          .sort((a, b) => a.price - b.price);
        setFilteredData(sortedData);
        console.log(sortedData);
      } else if (optionValue === "highToLow") {
        //  high to low based on price
        const sortedData = filteredData
          .slice()
          .sort((a, b) => b.price - a.price);
        setFilteredData(sortedData);
        console.log(sortedData);
      }
    }
  }, [inputValue, category, optionValue]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-10 pt-10 px-5 gap-5">
      <div className="col-span-1 md:border-r border-triple">
        <form
          className="flex items-center mb-10"
          onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search Products..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input w-full lg:w-2/4 mr-3"
          />
          <button className="btn" type="submit">
            <BiSearch size={20} />
          </button>
        </form>
        <Category setCategory={setCategory} lengthArr={lengthArr} />
      </div>
      <div className="col-span-2">
        <h1 className="text-4xl font-semibold mb-10 text-primary">Shop</h1>
        <div className="w-full flex justify-between items-center text-secondary">
          <p>
            Showing all {category == "All" ? allLength : postCardLength} results
          </p>
          <select
            className="outline-none"
            onChange={(e) => setOptionValue(e.target.value)}>
            <option value="default">Default sorting</option>
            <option value="lowToHigh">sort price low to high</option>
            <option value="highToLow">sort price high to low</option>
          </select>
        </div>
        <ShopCard filteredData={filteredData} />
      </div>
    </div>
  );
};

export default Shop;
