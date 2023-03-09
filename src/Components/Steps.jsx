import { Link, NavLink, Outlet } from "react-router-dom";

export default function Steps() {
  return (
    <>
      <header className="header">
        <nav>
          <NavLink to="/">
            <button className="step active">1</button>
          </NavLink>
          <NavLink to="/select-plan">
            <button className="step">2</button>
          </NavLink>
          <NavLink to="/add-ons">
            <button className="step">3</button>
          </NavLink>
          <NavLink to="/finishing-up">
            <button className="step">4</button>
          </NavLink>
        </nav>
      </header>
      <main>
        <article className="card">
          <Outlet />
        </article>
      </main>
      <footer>
        <a href="#" className="go-back">
          Go Back
        </a>
        <Link to="/thank-you">
          <button className="next-step">Next Step</button>
        </Link>
      </footer>
    </>
  );
}
