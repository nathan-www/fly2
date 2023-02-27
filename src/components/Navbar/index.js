import './style.scss'
import Logo from '../Logo';
import DepartingFromInput from '../DepartingFromInput';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="nav-left">
                <Logo />
            </div>
            <div className="nav-center">
                { props.childrenCenter }
            </div>
            <div className="nav-right">
                <div className="v-center departing-from">
                    <div className="flex">
                        <div className="v-center">
                            <h3>Departing from</h3>
                        </div>
                        <div className="v-center">
                            <DepartingFromInput />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;
