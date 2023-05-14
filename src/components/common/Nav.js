import "./Nav.css";
import { Link } from "react-router-dom";
import PetsList from "../pets/PetsList";
import StaffList from "../staff/StaffList";

function Nav() {
  return (
    <header>
      <article>
        <h1>
        <Link to="/" element={<StaffList/>}>Northwest <span>Animal Hospital</span></Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff" element={<StaffList/>}>All Staff</Link>
          </li>
          <li>
            <Link to="/pets" element={<PetsList/>}>All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
