import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <Link to="/">
          <h1>
            Northwest <span>Animal Hospital</span>
          </h1>
        </Link>
      </article>
      <aside>
        <ul>
          <Link to="/staff">
            <li>All Staff</li>
          </Link>
          <Link to="/pets">
            <li>All Pets</li>
          </Link>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
