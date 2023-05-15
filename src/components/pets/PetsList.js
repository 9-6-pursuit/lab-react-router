import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, type }) => {
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
        {type === "cat" ? cats.map(cat =>
          // All cats section 
          <Pet key={cat.id} kind="cat" pet={cat} />
        ) :
        type === "dog" ? dogs.map(dog =>
          // All dogs section 
          <Pet key={dog.id} kind="dog" pet={dog} />
        ) :
        pets.map(pet =>
          // All pets section 
          <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
        )}
      </section>
    </section>
  );
};

export default PetsList;
