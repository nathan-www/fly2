import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import "./global.scss";
import ResultsPage from "./views/ResultsPage";
import DepartureLocationContext from "./utils/DepartureLocationContext";
import { useState } from "react";

function App() {
  const [departureLocation, setDepartureLocation] = useState({
    text: "London",
    code: "LON",
  });

  return (
    <DepartureLocationContext.Provider
      value={{ departureLocation, setDepartureLocation }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/results/:destination/:departureDate/:returnDate?"
            element={<ResultsPage />}
          />
        </Routes>
      </BrowserRouter>
    </DepartureLocationContext.Provider>
  );
}

export default App;
