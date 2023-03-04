import "./style.scss";
import Icon from "../Icon";
import SearchInput from "../SearchInput";
import AutosuggestItem from "../AutosuggestItem";
import { useCallback, useContext, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { debounceWithQueue } from "../../utils/debounce";
import { autosuggest } from "../../utils/autosuggest";
import DepartureLocationContext from "../../utils/DepartureLocationContext";

function DepartingFromInput() {
  const [isTyping, setIsTyping] = useState(false);
  const [autofillOptions, setAutofillOptions] = useState([]);

  const { departureLocation, setDepartureLocation } = useContext(DepartureLocationContext);

  const departingInputRef = useDetectClickOutside({
    onTriggered: () => setIsTyping(false),
  });

  const searchDepartureLocations = useCallback(
    debounceWithQueue((text) => {
      autosuggest(text).then((places) => {
          setAutofillOptions(
            places.map((place) => ({
              id: place.iataCode,
              text: place.name,
              el: <AutosuggestItem name={place.name} country={place.countryName} type={place.type} />
            }))
          );
        });
    }, 800),
    []
  );

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
          value={departureLocation.text}
          isTyping={isTyping}
          onSelect={(val) => {
            setDepartureLocation({
              code: val.id,
              text: val.text
            });
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
