import "./style.scss";
import SearchButton from "../SearchButton";
import classNames from "classnames";
import { useRef, useState } from "react";
import Icon from "../Icon";
import SearchBar from "../SearchBar";
import { useDetectClickOutside } from "react-detect-click-outside";

function SearchBarMini(props) {
  const [bigSearchOpen, setBigSearchOpen] = useState(false);
  const bigSearchRef = useDetectClickOutside({
    onTriggered: () => setBigSearchOpen(false),
  });

  function niceDate(date) {
    return new Date(date).toLocaleDateString("en-GB");
  }

  return (
    <div
      className={classNames([
        "search-bar-container",
        { "big-mode": bigSearchOpen },
      ])}
      ref={bigSearchRef}
    >
      <div className="search-bar-mini flex">
        <div className="pill v-center" onClick={() => setBigSearchOpen(true)}>
          <h3>{props.destinationName}</h3>
        </div>
        <div className="seperator"></div>
        <div className="pill flex" onClick={() => setBigSearchOpen(true)}>
          <div className="v-center">
            <h3>{niceDate(props.departureDate)}</h3>
          </div>
          {props.returnDate != null && props.returnDate !== "" && (
            <>
              <div className="v-center icon-container">
                <Icon name="ArrowRight" size={18} color="#C9C9C9"></Icon>
              </div>
              <div className="v-center">
                <h3>{niceDate(props.returnDate)}</h3>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="big-search-bar-container">
        <SearchBar
          style={{
            border: "1px solid #DEDEDE",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
          departureDate={props.departureDate}
          returnDate={props.returnDate}
          destinationValue={{
            text: props.destinationName,
            id: props.destinationCode,
          }}
          onSearch={() => setBigSearchOpen(false)}
        ></SearchBar>
      </div>
    </div>
  );
}

export default SearchBarMini;
