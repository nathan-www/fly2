import "./style.scss";
import { useDetectClickOutside } from "react-detect-click-outside";

function SuggestionsList(props) {
  const ref = useDetectClickOutside({ onTriggered: props.items.length > 0 && props.onClickOutside });

  return (
    <div className="suggestions-list" style={props.style} ref={ref}>
      {props.items.map((item) => (
        <div
          className="suggestion-item"
          key={item}
          onClick={() => props.onSelect(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default SuggestionsList;
