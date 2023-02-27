import { createRef, useState } from "react";
import { TypeH3 } from "react-bootstrap-icons";
import "./style.scss";
import SuggestionsList from "../SuggestionsList";

function SearchInput(props) {
  return (
    <div className="search-input" style={props.style}>
      {props.isTyping || (props.value ?? "").length == 0 ? (
        <input type="text" placeholder={props.placeholder} onChange={(e) => props.onType(e.target.value)} autoFocus></input>
      ) : (
        <p className="chosen-text">{props.value}</p>
      )}

      {props.isTyping && props.options.length > 0 &&  (
        <SuggestionsList
          items={props.options}
          onSelect={props.onSelect}
          itemStyle={{
            fontSize: 16,
          }}
          style={props.dropdownStyle}
        ></SuggestionsList>
      )}
    </div>
  );
}

export default SearchInput;
