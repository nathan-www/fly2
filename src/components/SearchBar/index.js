import "./style.scss";
import SearchButton from "../SearchButton";
import classNames from "classnames";
import { useRef, useState } from "react";

function SearchBar() {
  const [activePill, setActivePill] = useState(0);

  const inputRefs = [useRef(), useRef(), useRef()];

  function selectPill(i){
    setActivePill(i);
    inputRefs[i].current.focus();
  }

  return (
    <div className="search-bar">
      <div
        className={classNames([
          "pill",
          "v-center",
          { active: activePill === 0 },
        ])}
        onClick={() => selectPill(0)}
      >
        <div className="pill-inner">
          <h3>Where to?</h3>
          <input
            type="text"
            placeholder="Search destinations..."
            ref={inputRefs[0]}
          />
        </div>
      </div>

      <div
        className={classNames([
          "pill",
          "v-center",
          { active: activePill === 1 },
        ])}
        onClick={() => selectPill(1)}
      >
        <div className="pill-inner">
          <h3>Depart</h3>
          <input type="date" placeholder="Select date" ref={inputRefs[1]} />
        </div>
      </div>

      <div
        className={classNames([
          "pill",
          "v-center",
          { active: activePill === 2 },
        ])}
        onClick={() => selectPill(2)}
      >
        <div className="pill-inner">
          <h3>Return</h3>
          <input type="date" placeholder="Select date" ref={inputRefs[2]} />
        </div>
      </div>

      <div className="v-center search-button-container">
        <SearchButton size={50}></SearchButton>
      </div>
    </div>
  );
}

export default SearchBar;
