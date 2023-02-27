import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import "./style.scss";
import FormTextInput from "../../components/FormTextInput";
import FormDropdownInput from "../../components/FormDropdownInput";
import { useState } from "react";
import FormCheckbox from "../../components/FormCheckbox";
import JourneySummary from "../../components/JourneySummary";
import ResultCard from "../../components/ResultCard";
import SearchBarMini from "../../components/SearchBarMini";

function ResultsPage() {
  const [cabinClass, setCabinClass] = useState("Economy");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [includeNearbyAirports, setIncludeNearbyAirports] = useState(true);

  return (
    <div className="results-page">
      <Navbar childrenCenter={<SearchBarMini />}></Navbar>

      <div className="container">
        <div className="flex">
          <Card style={{ marginRight: 50 }}>
            <div className="form-section">
              <FormDropdownInput
                label="Cabin class"
                options={[
                  "Economy",
                  "Premium Economy",
                  "Business Class",
                  "First Class",
                ]}
                value={cabinClass}
                onSelect={(val) => setCabinClass(val)}
              />
            </div>
            <div className="flex form-section">
              <FormTextInput
                label="Adults"
                value={numAdults}
                width={150}
                inputProps={{ min: 1, max: 10, type: "number" }}
                styles={{ marginRight: 20 }}
                onChange={(val) => setNumAdults(val)}
              />
              <FormTextInput
                label="Children"
                value={numChildren}
                inputProps={{ min: 0, max: 10, type: "number" }}
                width={150}
                onChange={(val) => setNumChildren(val)}
              />
            </div>
            <div className="form-section">
              <FormCheckbox
                checked={includeNearbyAirports}
                label="Include nearby airports"
                onSetChecked={(bool) => setIncludeNearbyAirports(bool)}
              />
            </div>
          </Card>

          <div className="results-container">
            <ResultCard price={1200}>
              <JourneySummary
                airlines={[
                  {
                    name: "Emirates",
                    logo: "https://logos.skyscnr.com/images/airlines/EK.png",
                  },
                ]}
                depart={{
                  time: { hours: 0, minutes: 5 },
                  airport: { code: "LHR", name: "London Heathrow" },
                }}
                stops={[{ code: "DBX", name: "Dubai International" }]}
                arrive={{
                  time: { hours: 13, minutes: 15 },
                  airport: { code: "HND", name: "Tokyo Haneda" },
                }}
                totalTime={{ hours: 20, minutes: 10 }}
              ></JourneySummary>
              <JourneySummary
                airlines={[
                  {
                    name: "Emirates",
                    logo: "https://logos.skyscnr.com/images/airlines/EK.png",
                  },
                ]}
                depart={{
                  time: { hours: 0, minutes: 5 },
                  airport: { code: "LHR", name: "London Heathrow" },
                }}
                stops={[{ code: "DBX", name: "Dubai International" }]}
                arrive={{
                  time: { hours: 13, minutes: 15 },
                  airport: { code: "HND", name: "Tokyo Haneda" },
                }}
                totalTime={{ hours: 20, minutes: 10 }}
              ></JourneySummary>
            </ResultCard>
            <ResultCard price={1200}>
              <JourneySummary
                airlines={[
                  {
                    name: "Emirates",
                    logo: "https://logos.skyscnr.com/images/airlines/EK.png",
                  },
                ]}
                depart={{
                  time: { hours: 0, minutes: 5 },
                  airport: { code: "LHR", name: "London Heathrow" },
                }}
                stops={[{ code: "DBX", name: "Dubai International" }]}
                arrive={{
                  time: { hours: 13, minutes: 15 },
                  airport: { code: "HND", name: "Tokyo Haneda" },
                }}
                totalTime={{ hours: 20, minutes: 10 }}
              ></JourneySummary>
              <JourneySummary
                airlines={[
                  {
                    name: "Emirates",
                    logo: "https://logos.skyscnr.com/images/airlines/EK.png",
                  },
                ]}
                depart={{
                  time: { hours: 0, minutes: 5 },
                  airport: { code: "LHR", name: "London Heathrow" },
                }}
                stops={[{ code: "DBX", name: "Dubai International" }]}
                arrive={{
                  time: { hours: 13, minutes: 15 },
                  airport: { code: "HND", name: "Tokyo Haneda" },
                }}
                totalTime={{ hours: 20, minutes: 10 }}
              ></JourneySummary>
            </ResultCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
