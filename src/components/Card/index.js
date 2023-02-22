import './style.scss';

function Card(props) {
    return (
        <div className='card' style={props.style}>
            {props.children}
        </div>
    )
}

export default Card;
