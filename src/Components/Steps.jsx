import { Link, NavLink, Outlet } from "react-router-dom";

export default function Steps() {
  return (
    <>
      <header className="header">
        <nav>
          <NavLink to="/">
            <button className="step active">1</button>
            <div className="step-info">
              <span>STEP 1</span>
              <p>YOUR INFO</p>
            </div>
          </NavLink>
          <NavLink to="/select-plan">
            <button className="step">2</button>
            <div className="step-info">
              <span>STEP 2</span>
              <p>SELECT PLAN</p>
            </div>
          </NavLink>
          <NavLink to="/add-ons">
            <button className="step">3</button>
            <div className="step-info">
              <span>STEP 3</span>
              <p>ADD-ONS</p>
            </div>
          </NavLink>
          <NavLink to="/finishing-up">
            <button className="step">4</button>
            <div className="step-info">
              <span>STEP 4</span>
              <p>SUMMARY</p>
            </div>
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
