
import { Link } from "react-router-dom";
import '../index.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <div class="container">
                <div className="d-flex justify-content-center align-items-center">
                    <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" className="wave-image"></img>
                    <div className="wave-text">Wave</div>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/about'>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/contact'>Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/bloglist'>BlogList</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/blogs'>Fetch & Routing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/currency'>Crypto Currency</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;