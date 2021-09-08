const Header = () => {
  return (
    <header>
      <div className="container d-flex justify-content-between">
        <h1>
          <span>I</span>nteviews <span>R</span>eports
        </h1>
        <nav>
          <ul>
            <li className="list-unstyled ">
              <i class="fas fa-users"></i>Candidates
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
