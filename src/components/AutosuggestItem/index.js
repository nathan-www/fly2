import "./style.scss";
import Icon from "../Icon";

function AutosuggestItem(props) {
  return (
    <div className="flex autosuggest-item">
      <div className="v-center icon-container">
        { props.type == "Country" && <Icon size={14} name={"GlobeAmericas"}></Icon>}
        { props.type == "City" && <Icon size={14} name={"Geo"}></Icon>}
        { props.type == "Airport" && <Icon size={14} name={"Airplane"}></Icon>}
      </div>
      <div className="v-center">
        <div>
          <h3>
            {props.name} {props.type == "Airport" ? "" : "(Any)"}
          </h3>
          {props.type !== "Country" && <p>{props.country}</p>}
        </div>
      </div>
    </div>
  );
}

export default AutosuggestItem;
