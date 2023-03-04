import { createRef, useCallback, useState } from "react";
import Icon from "../Icon";
import "./style.scss";
import Tooltip from "../Tooltip";

function JourneySummary(props) {

  const [stopDotRef, setStopDotRef] = useState(null);
  const [airlineLogoRef, setAirlineLogoRef] = useState(null);

  const stopDotRefSetter = useCallback(node => {
    if (node !== null) {
      setStopDotRef(node);
    }
  }, []);

  const airlineLogoRefSetter = useCallback(node => {
    if (node !== null) {
      setAirlineLogoRef(node);
    }
  }, []);

  function displayTime(time) {
    return ("00" + time).slice(-2);
  }

  return (
    <div className="journey-summary flex">

      <Tooltip position="bottom" attachTo={stopDotRef} text={props.stops.map((stop) =>  `${stop.name} (${stop.code})`).join(', ')}></Tooltip>
      <Tooltip position="bottom" attachTo={airlineLogoRef} text={props.airlines[0].name}></Tooltip>

      <div className="v-center airline-logo-container">
        <img src={props.airlines[0].logo} className="airline-logo" ref={airlineLogoRefSetter} alt={props.airlines[0].name} />
      </div>
      <div className="v-center">
        <div className="airport">
          <h3 className="float-right">
            <span className="airport-code">{props.depart.airport.code}</span> {props.depart.airport.name}
          </h3>
          <div className="time float-right">
            {displayTime(props.depart.time.hour)}:
            {displayTime(props.depart.time.minute)}
          </div>
        </div>
      </div>
      <div className="journey v-center">
        <div>
          <div className="jouney-time">
            {props.totalTime.hours}h{" "}
            {props.totalTime.minutes}m
          </div>
          <div className="journey-line">
            {props.stops.length > 0 && (
              <div className="stop-dot" ref={stopDotRefSetter}></div>
            )}
          </div>
          {props.stops.length == 0 && (
            <div className="jouney-stops-count">Direct</div>
          )}
          {props.stops.length == 1 && (
            <div className="jouney-stops-count red">1 stop</div>
          )}
          {props.stops.length > 1 && (
            <div className="jouney-stops-count red">
              {props.stops.length} stops
            </div>
          )}
        </div>
      </div>
      <div className="v-center">
        <div className="airport">
          <h3>
            <span className="airport-code">{props.arrive.airport.code}</span> {props.arrive.airport.name}
          </h3>
          <div className="time">
            {displayTime(props.arrive.time.hour)}:
            {displayTime(props.arrive.time.minute)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneySummary;
