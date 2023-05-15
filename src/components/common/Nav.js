import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <a href="/">Northwest <span>Animal Hospital</span> </a>
          {/* <Link to="/">Animal Hospital</Link> */}
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <a href="/staff">All Staff</a>
            {/* <Link to="/staff">All Staff</Link> */}
          </li>
          <li>
            <a href="/pets">All Pets</a>
            {/* <Link to="/pets">All Pets</Link> */}
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
