import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import SearchBar from "../../components/SearchBar";
import Icon from "../../components/Icon";
import { useState } from "react";
import "./style.scss";

function LandingPage() {
  const recommendedLocations = [
    { src: "/img/tokyo.jpg", name: "Tokyo, Japan" },
    { src: "/img/tahiti.jpg", name: "Tahiti, French Polynesia" },
    { src: "/img/paris.jpg", name: "Paris, France" },
    { src: "/img/cappadocia.jpg", name: "Cappadocia, Turkey" },
    { src: "/img/geneva.jpg", name: "Geneva, Switzerland" },
    { src: "/img/san-francisco.jpg", name: "San Francisco, USA" },
    { src: "/img/seychelles.jpg", name: "Praslin Island, Seychelles" },
  ];

  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);

  function carouselNext() {
    if (carouselActiveIndex === recommendedLocations.length - 1) {
      setCarouselActiveIndex(0);
    } else {
      setCarouselActiveIndex(carouselActiveIndex + 1);
    }
  }

  function carouselPrev() {
    if (carouselActiveIndex === 0) {
      setCarouselActiveIndex(recommendedLocations.length - 1);
    } else {
      setCarouselActiveIndex(carouselActiveIndex - 1);
    }
  }

  return (
    <div className="landing-page">
      <Navbar />
      <div className="container">
        <div className="carousel-container">
          <Carousel images={recommendedLocations} active={carouselActiveIndex}>
            <div className="v-center h100">
              <div className="inner">
                <h1>
                  Dream it. <br></br> Visit it.
                </h1>
                <SearchBar></SearchBar>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="flex carousel-suggestion">
            <div className="v-center">
                <h3>Flights to <span className="carousel-suggestion-link">{recommendedLocations[carouselActiveIndex].name}</span></h3>
            </div>
            <div className="v-center right-arrow">
                <Icon name="ArrowRight" size={18} color="#666666"></Icon>
            </div>
        </div>

        <button onClick={carouselPrev}>Prev</button>
        <button onClick={carouselNext}>Next</button>
      </div>
    </div>
  );
}

export default LandingPage;
