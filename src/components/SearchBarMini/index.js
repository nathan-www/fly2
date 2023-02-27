import "./style.scss";
import SearchButton from "../SearchButton";
import classNames from "classnames";
import { useRef, useState } from "react";
import Icon from "../Icon";
import SearchBar from "../SearchBar";
import { useDetectClickOutside } from 'react-detect-click-outside';

function SearchBarMini() {
  const [bigSearchOpen, setBigSearchOpen] = useState(false);

  const bigSearchRef = useDetectClickOutside({ onTriggered: () => setBigSearchOpen(false) });

  return (
    <div className={classNames(["search-bar-container", {'big-mode': bigSearchOpen}])} ref={bigSearchRef}>
      <div className="search-bar-mini flex">
        <div className="pill v-center" onClick={() => setBigSearchOpen(true)}>
          <h3>Tokyo (Any)</h3>
        </div>
        <div className="seperator"></div>
        <div className="pill flex" onClick={() => setBigSearchOpen(true)}>
          <div className="v-center">
            <h3>12 March</h3>
          </div>
          <div className="v-center icon-container">
            <Icon name="ArrowRight" size={18} color="#C9C9C9"></Icon>
          </div>
          <div className="v-center">
            <h3>22 March</h3>
          </div>
        </div>
      </div>

      <div className="big-search-bar-container">
        <SearchBar
          style={{
            border: "1px solid #DEDEDE",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff"
          }}
        ></SearchBar>
      </div>
    </div>
  );
}

export default SearchBarMini;
