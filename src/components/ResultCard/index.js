import "./style.scss";
import Card from "../../components/Card";
import JourneySummary from "../../components/JourneySummary";
import Icon from "../../components/Icon";

function ResultCard(props) {
  return (
    <Card style={{ width: "100%", marginBottom: "20px" }}>
      <div className="flex result-card-inner">
        <div className="v-center">
          <div>{props.children}</div>
        </div>
        <div className="v-center push-right price-container">
          <div>
            <h1>£{props.price}</h1>
            <div className="btn cta flex" onClick={() => window.open(props.actionURL)}>
              <div className="v-center">
                <p>Select</p>
              </div>
              <div className="v-center">
                <Icon size={17} name="ArrowRight"></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ResultCard;
