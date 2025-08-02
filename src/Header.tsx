import './styles/Header.css'
import HomeIcon from './assets/home.svg'
import CartIcon from './assets/cart.svg'

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
              <a href=""><img className="home-favicon-img" src={HomeIcon}/></a>
            </li>
            <li>
              <a href="" style={{ color: 'lightskyblue', textDecoration: 'underline' }}>featured</a>
            </li>
            <li>
              <a href="">gallery</a>
            </li>
            <li>
              <a href="">info</a>
            </li>
            <li>
              <a href=""><img className="cart-favicon-img" src={CartIcon}/></a>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default Header