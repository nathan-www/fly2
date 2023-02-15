import './style.scss';
import Icon from '../Icon';

function Logo() {
    return (
        <div className="flex logo">
            <div className="v-center">
                <Icon name="AirplaneFill" color="#3069FE" size="20px" className="icon"/>
            </div>
            <div className="v-center">
                <h1>Fly2</h1>
            </div>
        </div>
    )
}

export default Logo;