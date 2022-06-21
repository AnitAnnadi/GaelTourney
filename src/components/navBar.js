const NavBar = () => {
  const navLinks = document.querySelector(".nav-links");
  return (
    <nav className="nav" id="nav">
      <div className="nav-center section-center">
        <div className="nav-header">
          <p className="nav-title">
            <span className="color">gael</span> tourney
          </p>
          <button className="nav-btn" id="nav-btn">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <a href="" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
