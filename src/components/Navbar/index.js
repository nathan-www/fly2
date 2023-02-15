import './style.scss'
import Logo from '../Logo';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="nav-left">
                <Logo />
            </div>
            <div className="nav-center"></div>
            <div className="nav-right"></div>
        </div>
    )
}


export default Navbar;