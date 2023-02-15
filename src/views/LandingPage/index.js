import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import { useState } from "react";
import './style.scss';

function LandingPage() {

    const recommendedLocations = [{ src: '/img/tokyo.jpg', name: 'Tokyo, Japan' }, { src: '/img/tahiti.jpg', name: 'Tahiti, French Polynesia' }, { src: '/img/paris.jpg', name: 'Paris, France' }, { src: '/img/cappadocia.jpg', name: 'Cappadocia, Turkey' }];

    const [ carouselActiveIndex, setCarouselActiveIndex ] = useState(0);

    function carouselNext() {
        if (carouselActiveIndex == recommendedLocations.length - 1) {
            setCarouselActiveIndex(0);
        } else {
            setCarouselActiveIndex(carouselActiveIndex + 1);
        }
    }

    function carouselPrev() {
        if (carouselActiveIndex == 0) {
            setCarouselActiveIndex(recommendedLocations.length - 1);
        } else {
            setCarouselActiveIndex(carouselActiveIndex - 1);
        }
    }

    return (
        <div className="landing-page">
            <Navbar />
            <div className="container">
                <h1>Landing Page</h1>

                <div style={{ width: '100%', height: '500px' }}>
                    <Carousel images={recommendedLocations} active={carouselActiveIndex}></Carousel>
                </div>

                <button onClick={carouselPrev}>Prev</button>
                <button onClick={carouselNext}>Next</button>

            </div>
        </div>
    );
}

export default LandingPage;