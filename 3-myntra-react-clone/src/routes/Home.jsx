import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";
import SaleCountdownTimer from "../Components/SaleCountdownTimer";
function Home() {
  const items = useSelector((store) => store.items);
  // console.log(items[0].company);
  const [query, setQuery] = useState("");

  return (
    <main>
      <div className="search_bar , mainsearch">
        <span className="material-symbols-outlined search_icon">
          <IoSearchSharp style={{ fontSize: "1.4em", marginTop: "7px" }} />
        </span>
        <input
          className="search_input text-input"
          placeholder="Search for products, brands and more"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <SaleCountdownTimer />
      <div className="items-container">
        {items
          .filter((item) =>
            item.company.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
      </div>
    </main>
  );
}

export default Home;
