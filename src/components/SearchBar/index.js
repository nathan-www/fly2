import "./style.scss";
import SearchButton from "../SearchButton";
import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import SearchInput from "../SearchInput";
import { useDetectClickOutside } from "react-detect-click-outside";
import { debounceWithQueue } from "../../utils/debounce";
import { autosuggest } from "../../utils/autosuggest";
import AutosuggestItem from "../AutosuggestItem";
import { useNavigate } from "react-router-dom";
import { PinFill } from "react-bootstrap-icons";

function SearchBar(props) {
  const [activePill, setActivePill] = useState(0);
  const [destinationTyping, setDestinationTyping] = useState(true);
  const [destinationAutofillOptions, setDestinationAutofillOptions] = useState(
    []
  );
  const [destinationValue, setDestinationValue] = useState({});
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    if (props.destinationValue != null) {
      setDestinationValue(props.destinationValue);
    }
  }, [props.destinationValue, setDestinationValue]);

  useEffect(() => {
    if (props.departureDate != null) {
      setDepartureDate(props.departureDate);
    }
  }, [props.departureDate, setDepartureDate]);

  useEffect(() => {
    if (props.returnDate != null) {
      setReturnDate(props.returnDate);
    }
  }, [props.returnDate, setReturnDate]);

  let navigate = useNavigate();
  const submitSearch = useCallback(() => {
    if (destinationValue.id != null && departureDate.length != "") {
      const destination = destinationValue.text + `[${destinationValue.id}]`;
      if (returnDate.length != null) {
        navigate(`/results/${destination}/${departureDate}/${returnDate}`);
      } else {
        navigate(`/results/${destination}/${departureDate}`);
      }
      if(props.onSearch != null){
        props.onSearch();
      }
    }
  }, [destinationValue, departureDate, returnDate]);

  const searchDestinations = useCallback(
    debounceWithQueue((text) => {
      autosuggest(text).then((places) => {
        setDestinationAutofillOptions(
          places.map((place) => ({
            id: place.iataCode,
            text: place.name,
            el: (
              <AutosuggestItem
                name={place.name}
                country={place.countryName}
                type={place.type}
              />
            ),
          }))
        );
      });
    }, 800),
    []
  );

  const destinationPillRef = useDetectClickOutside({
    onTriggered: () => setDestinationTyping(false),
  });

  const inputRefs = [null, useRef(), useRef()];

  function selectPill(i) {
    setActivePill(i);
    if (inputRefs[i] != null) {
      inputRefs[i].current.focus();
    }
  }

  return (
    <div className="search-bar" style={props.style}>
      <div
        className={classNames([
          "pill",
          "v-center",
          { active: activePill === 0 },
        ])}
        onClick={(e) => {
          e.stopPropagation();
          selectPill(0);
          setDestinationTyping(true);
        }}
        ref={destinationPillRef}
      >
        <div className="pill-inner">
          <h3>Where to?</h3>
          {
            <SearchInput
              value={destinationValue.text}
              placeholder="Search destinations..."
              options={destinationAutofillOptions}
              onSelect={(val) => {
                setDestinationValue(val);
                setDestinationTyping(false);
              }}
              isTyping={destinationTyping}
              onType={searchDestinations}
              dropdownStyle={{
                position: "absolute",
                left: 0,
                bottom: -18,
                transform: "translateY(calc(100% + 5px))",
                minWidth: 215,
              }}
              style={{
                position: "relative",
              }}
            ></SearchInput>
          }
        </div>
      </div>

      <div
        className={classNames([
          "pill",
          "v-center",
          { active: activePill === 1 },
        ])}
        onClick={() => selectPill(1)}
      >
        <div className="pill-inner">
          <h3>Depart</h3>
          <input
            className="input"
            type="date"
            placeholder="Select date"
            ref={inputRefs[1]}
            onChange={(e) => setDepartureDate(e.target.value)}
            value={departureDate}
          />
        </div>
      </div>

      <div
        className={classNames([
          "pill",
          "v-center",
          { active: activePill === 2 },
        ])}
        onClick={() => selectPill(2)}
      >
        <div className="pill-inner">
          <h3>Return</h3>
          <input
            className="input"
            type="date"
            placeholder="Select date"
            ref={inputRefs[2]}
            onChange={(e) => setReturnDate(e.target.value)}
            value={returnDate}
          />
        </div>
      </div>

      <div className="v-center search-button-container">
        <SearchButton onClick={() => submitSearch()} size={50}></SearchButton>
      </div>
    </div>
  );
}

export default SearchBar;
