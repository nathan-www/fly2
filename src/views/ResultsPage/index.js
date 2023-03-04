import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import "./style.scss";
import FormTextInput from "../../components/FormTextInput";
import FormDropdownInput from "../../components/FormDropdownInput";
import { useContext, useEffect, useState } from "react";
import FormCheckbox from "../../components/FormCheckbox";
import JourneySummary from "../../components/JourneySummary";
import ResultCard from "../../components/ResultCard";
import SearchBarMini from "../../components/SearchBarMini";
import { useParams } from "react-router-dom";
import LoaderGrey from "../../assets/icons/loader-grey.png";
import Icon from "../../components/Icon";
import DepartureLocationContext from "../../utils/DepartureLocationContext";

const cabinClassOptions = {
  Economy: "economy",
  "Premium Economy": "premium-economy",
  "Business Class": "business-class",
  "First Class": "first-class",
};

function ResultsPage() {
  const [cabinClass, setCabinClass] = useState("Economy");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [includeNearbyAirports, setIncludeNearbyAirports] = useState(true);

  const { departureLocation } = useContext(DepartureLocationContext);

  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [updatedSearchFilters, setUpdatedSearchFilters] = useState(false);
  const [triggerSearch, setTriggerSearch] = useState(false);

  const URLParams = useParams();

  const destinationName = URLParams.destination.split("[")[0];
  const destinationCode = URLParams.destination.split("[")[1].slice(0, -1);
  const departureDate = URLParams.departureDate;
  const returnDate = URLParams.returnDate;

  useEffect(() => {
    setUpdatedSearchFilters(true);
  }, [cabinClass, numAdults, numChildren, includeNearbyAirports]);

  useEffect(() => {
    let params = new URLSearchParams({
      origin: departureLocation.code,
      destination: destinationCode,
      numAdults,
      numChildren,
      cabinClass: cabinClassOptions[cabinClass],
      departureDate: +new Date(departureDate) / 1000,
      returnDate:
        returnDate != null
          ? +new Date(returnDate) / 1000
          : +new Date(departureDate) / 1000,
      return: returnDate != null,
      nearbyAirports: includeNearbyAirports,
    });

    setUpdatedSearchFilters(false);
    setTriggerSearch(false);
    setResults([]);
    setIsLoading(true);

    fetch("https://nathanarnold.co.uk/fly2/api/flights/?" + params.toString())
      .then((res) => res.json())
      .then((res) => {
        setResults(res.flights);
        setIsLoading(false);
      });
  }, [
    destinationCode,
    departureDate,
    returnDate,
    departureLocation,
    triggerSearch,
  ]);

  return (
    <div className="results-page">
      <Navbar
        childrenCenter={
          <SearchBarMini
            destinationCode={destinationCode}
            destinationName={destinationName}
            departureDate={departureDate}
            returnDate={returnDate}
          />
        }
      ></Navbar>

      <div className="container">
        <div className="flex">
          <Card style={{ marginRight: 50 }}>
            <div className="form-section">
              <FormDropdownInput
                label="Cabin class"
                options={[
                  { text: "Economy" },
                  { text: "Premium Economy" },
                  { text: "Business Class" },
                  { text: "First Class" },
                ]}
                value={cabinClass}
                onSelect={(val) => setCabinClass(val)}
              />
            </div>
            <div className="flex form-section">
              <FormTextInput
                label="Adults"
                value={numAdults}
                width={120}
                inputProps={{ min: 1, max: 10, type: "number" }}
                styles={{ marginRight: 20 }}
                onChange={(e) => setNumAdults(e.target.value)}
              />
              <FormTextInput
                label="Children"
                value={numChildren}
                inputProps={{ min: 0, max: 10, type: "number" }}
                width={120}
                onChange={(e) => setNumChildren(e.target.value)}
              />
            </div>
            <div className="form-section">
              <FormCheckbox
                checked={includeNearbyAirports}
                label="Include nearby airports"
                onSetChecked={(bool) => setIncludeNearbyAirports(bool)}
              />
            </div>

            {updatedSearchFilters && (
              <div
                className="btn btn-primary"
                onClick={() => setTriggerSearch(true)}
              >
                Update search
              </div>
            )}
          </Card>

          <div className="results-container">
            {results.length == 0 && !isLoading && (
              <div className="results-placeholder">
                <Icon
                  name="EmojiFrown"
                  color="#4d4d4d"
                  size={30}
                  className="icon"
                ></Icon>
                <h3>No flights found</h3>
                <p><br></br>(Note that our API is heavily limited, which may cause flight data to be unavailable)</p>
              </div>
            )}
            {results.length == 0 && isLoading && (
              <div className="results-placeholder">
                <img src={LoaderGrey} className="loader" alt="" />
              </div>
            )}

            {results.map((result) => (
              <ResultCard
                price={result.price}
                actionURL={result.URL}
                key={result.id}
              >
                {result.legs.map((leg, i) => (
                  <JourneySummary
                    key={i}
                    airlines={[leg.airline]}
                    depart={{
                      time: leg.departure.time,
                      airport: {
                        code: leg.departure.code,
                        name: leg.departure.name,
                      },
                    }}
                    stops={leg.stops}
                    arrive={{
                      time: leg.arrival.time,
                      airport: {
                        code: leg.arrival.code,
                        name: leg.arrival.name,
                      },
                    }}
                    totalTime={{ hours: Math.floor(leg.durationInMinutes / 60), minutes: leg.durationInMinutes % 60 }}
                  ></JourneySummary>
                ))}
              </ResultCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
