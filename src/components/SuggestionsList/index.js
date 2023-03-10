import "./style.scss";
import { useDetectClickOutside } from "react-detect-click-outside";

function SuggestionsList(props) {
  const ref = useDetectClickOutside({
    onTriggered: props.items.length > 0 && props.onClickOutside,
  });

  return (
    <div className="suggestions-list" style={props.style} ref={ref}>
      {props.items.map((item) => (
        <div
          className="suggestion-item"
          key={item.id}
          style={props.itemStyle}
          onClick={(e) => { e.stopPropagation(); props.onSelect(item)}}
        >
          {item.el ?? item.text}
        </div>
      ))}
    </div>
  );
}

export default SuggestionsList;
