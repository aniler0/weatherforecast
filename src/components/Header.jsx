import React, { useState } from "react";
import { AiFillCloud } from "react-icons/ai";
import { IoIosSunny } from "react-icons/io";
import "../styles/Header.css";

const Header = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleCity = (e) => {
    e.preventDefault();
    setCity(input);
    setInput("");
  };

  return (
    <div className="header">
      <div className="header__left">
        <h1 style={{ fontSize: "1.7em", fontWeight: "lighter" }}>
          Weather Forecast
        </h1>
        <span className="icons">
          <div className="sun">
            <IoIosSunny />
          </div>
          <div className="cloud">
            <AiFillCloud />
          </div>
        </span>
      </div>

      <div className="header__center">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter City"
            id="input"
            required
          />
          <button onClick={handleCity} type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
