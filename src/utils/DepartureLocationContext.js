import React from "react";

const DepartureLocationContext = React.createContext({
  departureLocation: {
    text: "London",
    code: "LON"
  },
  setDepartureLocation: () => {}
});

export default DepartureLocationContext;
