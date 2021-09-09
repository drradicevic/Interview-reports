import "./Header.css";

const Header = () => {
  return (
    <header className="pt-3 text-white">
      <div className="container d-flex justify-content-between">
        <h1>
          <span>I</span>nterviews <span>R</span>eports
        </h1>
        <nav>
          <ul>
            <li className="list-unstyled py-2 px-4">
              <i className="fas fa-users fs-3 pe-2"></i>Candidates
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
