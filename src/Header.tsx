import './styles/Header.css'

import HomeIcon from './assets/home.svg'
import CartIcon from './assets/cart.svg'

import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>

      <div className="logo">
        <a href=""><h3>Hong Wang</h3></a>
      </div>

      <div className="menu">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">
                <img className="home-favicon-img" src={HomeIcon}/>
              </Link>
            </li>
            <li>
              <Link to="/">featured</Link>
            </li>
            <li>
              <Link to="/gallery">gallery</Link>
            </li>
            <li>
              <Link to="/info">info</Link>
            </li>
            <li>
              <Link to="/">
                <img className="cart-favicon-img" src={CartIcon}/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default Header