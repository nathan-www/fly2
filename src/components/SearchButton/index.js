import "./style.scss";
import Icon from "../Icon";

function SearchButton(props) {

  return (
    <div onClick={props.onClick}
      className="search-button v-center"
      style={{ height: props.size, width: props.size }}
    >
      <Icon
        name="Search"
        size={ 0.4 * props.size}
        color="#fff"
      ></Icon>
    </div>
  );
}

export default SearchButton;
