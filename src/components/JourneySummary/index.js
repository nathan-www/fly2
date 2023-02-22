import Icon from "../Icon";
import "./style.scss";

function JourneySummary(props) {
  function displayTime(time) {
    return ("00" + time).slice(-2);
  }

  return (
    <div className="journey-summary flex">
      <div className="v-center airline-logo-container">
        <img src={props.airlines[0].logo} alt="" />
      </div>
      <div className="v-center">
        <div className="airport">
          <h3>
            <span className="airport-code">LHR</span> London Heathrow
          </h3>
          <div className="time float-right">
            {displayTime(props.depart.time.hours)}:
            {displayTime(props.depart.time.minutes)}
          </div>
        </div>
      </div>
      <div className="journey v-center">
        <div>
          <div className="jouney-time">
            {displayTime(props.totalTime.hours)}h{" "}
            {displayTime(props.totalTime.minutes)}m
          </div>
          <div className="journey-line">
            {props.stops.length > 0 && <div className="stop-dot"></div>}
          </div>
          {props.stops.length == 0 && (
            <div className="jouney-stops-count">Non-stop</div>
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
            <span className="airport-code">HND</span> Tokyo Heneda
          </h3>
          <div className="time">
            {displayTime(props.arrive.time.hours)}:
            {displayTime(props.arrive.time.minutes)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneySummary;
