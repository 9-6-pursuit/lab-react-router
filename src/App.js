import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';


/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import OwnerList from "./components/owners/OwnerList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);


  
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home employees={employees} owners={owners} pets={pets}/>}/>
            <Route path="/staff" element={<StaffList employees={employees} />} /> 
            <Route path="/pets" element={<Navigate to="/pets/cats"/>} />
            <Route path="/pets/*" element={<PetsList pets={pets} />}/>

            <Route path="/owners" element={<OwnerList owners={owners} /> } />
           

          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


//NOTES:

//Added Navigate in order to redirect pets to pets/cats
/* <Route path="/pets" element={<Navigate to="/pets/cats" />} /> */

/*  For extra, I am trying to add owners. I realized that there is already some code written for this. The ownerData was already imported. I import the OwnerList here, after I create it. I see that the useState for owners is the ownerData.

I add a route for the owners and I pass the owners prop down as owners.

*/
