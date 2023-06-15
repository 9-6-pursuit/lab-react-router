import Staffer from "./Staffer";
import "./StaffList.css";
import { Link } from "react-router-dom";

export const StaffList = ({ employees }) => {
  const staff = employees.map((employee) => (
    <Staffer key={employee.id} employee={employee} />
  ));

  return (
    <section className="staff-list">
       <Link to="/staff">
        <h2>Our Staff</h2>
        <div className="staffers">{staff}</div>
      </Link>
    </section>
  );
};

export default StaffList;
