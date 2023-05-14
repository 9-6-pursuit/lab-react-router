import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ cats, dogs, path }) => {
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {<section>
          {path.includes('cats') || path.includes('all') ? cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          )) : null}
          {path.includes('dogs') || path.includes('all') ? dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          )) : null}
        </section>}
      </section>

    </section>
  );
};

export default PetsList;
