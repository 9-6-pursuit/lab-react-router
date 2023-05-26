import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Routes, Route } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
      <Routes>

        <Route path="/" element={pets.map((pet) => (
          <Pet key={pet.id} kind="pet" pet={pet} />
        ))}/>
      
        <Route path="/cats" element={cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}/>
        {/* All cats section */}
         
        <Route path ='/dogs' element={dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}/>
      
      </Routes>
      </section>
    </section>
  );
};

export default PetsList;
