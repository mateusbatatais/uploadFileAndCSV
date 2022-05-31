const NavMenu = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-4">
      <div className="container">
        <a className="navbar-brand" href="/home">
          Atix Challenge
        </a>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/images">
                Images
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sheets">
                Sheets
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
