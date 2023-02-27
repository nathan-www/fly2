import "./style.scss";
import Icon from "../Icon";
import SearchInput from "../SearchInput";
import { useCallback, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { debounceWithQueue } from "../../utils/debounce";

function DepartingFromInput() {
  const [isTyping, setIsTyping] = useState(false);
  const [departingValue, setDepartingValue] = useState({});
  const [autofillOptions, setAutofillOptions] = useState([]);



  const departingInputRef = useDetectClickOutside({
    onTriggered: () => setIsTyping(false),
  });

  const searchDepartureLocations = useCallback(debounceWithQueue((text) => {
    setAutofillOptions([
      {
        id: 1,
        text: text,
      },
    ]);
    console.log('called ' + text);
  }, 800), []);

  return (
    <div
      className="departing-from-input flex"
      onClick={(e) => {
        e.stopPropagation();
        setIsTyping(true);
      }}
      ref={departingInputRef}
    >
      <div className="v-center icon-container">
        <Icon name="GeoAltFill" size={14}></Icon>
      </div>
      <div className="v-center">
        <SearchInput
          placeholder="Search"
          value={departingValue.text}
          isTyping={isTyping}
          onSelect={(val) => {
            setDepartingValue(val);
            setIsTyping(false);
          }}
          onType={searchDepartureLocations}
          options={autofillOptions}
          dropdownStyle={{
            position: "absolute",
            left: 0,
            bottom: 0,
            transform: "translateY(calc(100% + 5px))",
            width: "100%",
          }}
        ></SearchInput>
      </div>
    </div>
  );
}

export default DepartingFromInput;
