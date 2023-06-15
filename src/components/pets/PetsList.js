// import { BrowserRouter as Routes, Route } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet.js";
import "./PetsList.css";

export const PetsList = ({ pets, type}) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      console.log(acc)
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {
          type === "cat" && (
            <>
             {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}
            </>
          )
        }
          {
            type === "dog" && (
              <>
              {dogs.map((dog) => (
                <Pet key={dog.id} kind="dog" pet={dog} />
              ))}
              </>
            )
          }
        {/* <Routes> */}
        {/* All cats section */}
        {/* <Route path="/cats" element={ <PetOverview pets={cats}/> } ></Route>
        {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))} */}

        {/* All dogs section */}
        {/* <Route path="/dogs" element={ <PetOverview pets={dogs}/> } ></Route>
        {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}
        </Routes> */}
      </section>
    </section>
  );
};

export default PetsList;
