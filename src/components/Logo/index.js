import './style.scss';
import Icon from '../Icon';
import { useNavigate } from 'react-router-dom';

function Logo() {

    let navigate = useNavigate();

    return (
        <div className="flex logo" onClick={() => navigate("/")}>
            <div className="v-center">
                <Icon name="AirplaneFill" color="#3069FE" size={20} className="icon"/>
            </div>
            <div className="v-center">
                <h1>Fly2</h1>
            </div>
        </div>
    )
}

export default Logo;
