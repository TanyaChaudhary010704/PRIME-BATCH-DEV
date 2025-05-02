import React from "react";
import { useState } from "react";
import { useGetProducts } from "../hooks/useGetProducts";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  const { loading, products } = useGetProducts();

  return (
    <div className="p-4 m-4">
      <div className="flex gap-4">
        <input
          className="py-1 px-3 border-1 border-solid border-red-700 rounded-lg"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="py-1 px-3 rounded-lg bg-lime-600 text-white">
          Search
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="text-purple-600 my-6 text-xl">Products</h1>
          <div className="grid grid-cols-3 items-center justify-center gap-4">
            {products.map(({ _id, title, price, stock }) => {
              return (
                <div key={_id}>
                  <h2>{title}</h2>
                  <h3>Rs. {price}</h3>
                  <h3>Available: {stock}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { SearchPage };
