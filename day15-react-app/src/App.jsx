import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
const AppPage = () => {
  // const getData = () => {
  //   const pr1 = fetch("https://dummyjson.com/products");
  //   pr1.then((res) => res.json())
  //     .catch((err) => {
  //       console.log("Error occured:", err);
  //     })
  //     .then((data) => {
  //       console.log("Data:", data);
  //   })
  // };
  // getData();
  const [data, setData] = useState({});
  const [currPage, setCurrPage] = useState(1);
  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${10*(currPage-1)}`);
      const da = await response.json();
      setData(da);
      console.log(": data", data);
    } catch (err) {
      console.log("Error", err.message);
    } finally {
      console.log("Completed successfully")
    }
  };
  useEffect(() => {
    getData();
  }, [currPage]);
  // optional chaining ? -> move forward when not undefined
  //conditional rendering ->ternary operator
  //nullish coalescing -> something1??something2 return something1 if not null/undefined else return something 2
  const totalPages = Math.ceil(data.total / data.limit);
  const pages = [];
  for (let i = 0; i < totalPages; i++){
    pages.push(i + 1);
  }
  return (
    <div>
      <h1>Hello</h1>
      <hr />
      <select
        onChange={(e)=>{setCurrPage(e.target.value)}}
      >
        {pages.map((pageNumber) => {
          return <option>{pageNumber}</option>
        })}
      </select>
      <hr />
      <div style={{ display: "flex", flexWrap:"wrap" }}>
        {data.products?.map((obj)=>(<Card title={obj.title} price={obj.price} thumbnail={obj.thumbnail}/>))}
      </div>
    </div>
  );
}
export default AppPage;