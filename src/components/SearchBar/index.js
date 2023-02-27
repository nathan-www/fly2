import "./style.scss";
import SearchButton from "../SearchButton";
import classNames from "classnames";
import { useRef, useState } from "react";
import SearchInput from "../SearchInput";
import { useDetectClickOutside } from "react-detect-click-outside";

function SearchBar(props) {

  const [activePill, setActivePill] = useState(0);
  const [destinationTyping, setDestinationTyping] = useState(false);
  const [destinationValue, setDestinationValue] = useState('');
  const [destinationAutofillOptions, setDestinationAutofillOptions] = useState([]);

  const searchDestinations = (text) => {
    setDestinationAutofillOptions([{
      id: 3,
      text: text
    }]);
  }

  const destinationPillRef = useDetectClickOutside({
    onTriggered: () => setDestinationTyping(false)
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
        onClick={(e) => { e.stopPropagation(); selectPill(0); setDestinationTyping(true) }}
        ref={destinationPillRef}
      >
        <div className="pill-inner">
          <h3>Where to?</h3>
          {<SearchInput
            value={destinationValue.text}
            placeholder="Search destinations..."
            options={destinationAutofillOptions}
            onSelect={(val) => { setDestinationValue(val); setDestinationTyping(false); }}
            isTyping={destinationTyping}
            onType={searchDestinations}
            dropdownStyle={{
              position: "absolute",
              left: 0,
              bottom: -18,
              transform: "translateY(calc(100% + 5px))",
              minWidth: 215
            }}
            style={{
              position: 'relative'
            }}
          ></SearchInput>}
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
          />
        </div>
      </div>

      <div className="v-center search-button-container">
        <SearchButton size={50}></SearchButton>
      </div>
    </div>
  );
}

export default SearchBar;
