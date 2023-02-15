import "./style.scss";

function Carousel(props) {
  function CarouselItemClass(i) {
    if (i === props.active) {
      return "current";
    } else if (
      i === props.active - 1 ||
      (i === props.images.length - 1 && props.active === 0)
    ) {
      return "previous";
    } else if (
      i === props.active + 1 ||
      (props.active === props.images.length - 1 && i === 0)
    ) {
      return "next";
    }
    return "hidden";
  }

  return (
    <div className="carousel">
      {props.images.map((img, i) => (
        <img className={CarouselItemClass(i)} key={img.src} src={img.src} alt="" />
      ))}
      <div className="carousel-inner">
        { props.children }
      </div>
    </div>
  );
}

export default Carousel;
