import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import CarouselProgress from "../../components/CarouselProgress";
import SearchBar from "../../components/SearchBar";
import Icon from "../../components/Icon";
import { useEffect, useState } from "react";
import "./style.scss";

import ImageTokyo from "../../assets/img/tokyo.jpg";
import ImageTahiti from "../../assets/img/tahiti.jpg";
import ImageParis from "../../assets/img/paris.jpg";
import ImageCappadocia from "../../assets/img/cappadocia.jpg";

function LandingPage() {
  const recommendedLocations = [
    { src: ImageTokyo, name: "Tokyo, Japan" },
    { src: ImageTahiti, name: "Tahiti, French Polynesia" },
    { src: ImageParis, name: "Paris, France" },
    { src: ImageCappadocia, name: "Cappadocia, Turkey" },
  ];

  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [carouselActiveIndex]);

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
            <h3>
              Flights to{" "}
              <span className="carousel-suggestion-link">
                {recommendedLocations[carouselActiveIndex].name}
              </span>
            </h3>
          </div>
          <div className="v-center right-arrow">
            <Icon name="ArrowRight" size={18} color="#666666"></Icon>
          </div>

          <div className="v-center push-right">
            <CarouselProgress
              currentIndex={carouselActiveIndex}
              totalItems={recommendedLocations.length}
            ></CarouselProgress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
