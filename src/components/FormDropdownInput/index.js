import "./style.scss";
import Icon from "../Icon";
import SuggestionsList from "../SuggestionsList";
import { useState } from "react";

function FormDropdownInput(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="form-text-input"
      style={{ width: props.width, position: "relative", ...props.styles }}
    >
      <h3>{props.label}</h3>
      <div
        className="dropdown-container flex"
        onClick={(e) => {
          e.stopPropagation();
          setDropdownOpen(true);
        }}
      >
        <div className="v-center label">{props.value}</div>
        <div className="v-center down-icon">
          <Icon name="ChevronDown" color="#666666"></Icon>
        </div>
      </div>

      {dropdownOpen && (
        <SuggestionsList
          items={props.options}
          onSelect={(val) => {
            props.onSelect(val);
            setDropdownOpen(false);
          }}
          onClickOutside={() => {
            setDropdownOpen(false);
          }}
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            transform: "translateY(calc(100% + 5px))",
          }}
        ></SuggestionsList>
      )}
    </div>
  );
}

export default FormDropdownInput;
