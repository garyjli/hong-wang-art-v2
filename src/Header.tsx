import './Header.css'

function Header() {
  return(
    <header>

      <div className="logo">
        <a href="/home"><h3>Hong Wang</h3></a>
      </div>

      <div className="menu">
        <nav>
          <ul className="nav-links">
            <li><a href="index.html"><img className="home-favicon-img" src="favicons/home.svg"/></a></li>
            <li><a id="featured-link" href="index.html">featured</a></li>
            <li><a href="gallery.html">gallery</a></li>
            <li><a href="info.html">info</a></li>
            <li><a href="cart.html"><img className="cart-favicon-img" src="favicons/cart.svg"/></a></li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default Header