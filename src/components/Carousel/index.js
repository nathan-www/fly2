import './style.scss';
import classNames from 'classnames';

function Carousel(props) {

    function CarouselItemClass(i) {
        if (i == props.active - 1 || (i == props.images.length - 1 && props.active == 0)) {
            return ['previous'];
        } else if(i == props.active + 1 || (props.active == props.images.length - 1 && i == 0)){
            return ['next'];
        }
    }

    return (
        <div className="carousel">
            {props.images.map((img, i) => <img className={classNames(CarouselItemClass(i))} src={img.src} alt="" />)}
        </div>
    )
}

export default Carousel;