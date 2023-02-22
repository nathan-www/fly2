import classNames from 'classnames';
import './style.scss';

function CarouselProgress(props) {
    return (
        <div className='carousel-progress flex'>
            { Array(props.totalItems).fill(0).map((e,i) => <div key={i} className={classNames(['progress-dot', {'active': props.currentIndex === i}])}></div>) }
        </div>
    )
}

export default CarouselProgress;
