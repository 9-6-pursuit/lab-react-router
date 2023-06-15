import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const navigate = useNavigate()
  const kind = useParams()
  useEffect(()=>{
    if(!kind.kind){
      navigate('/pets/cats')
    }
  },[])

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}

        {kind.kind === 'cats' ?cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
          )) : null}

{kind.kind === 'dogs' ? dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
          )) : null}
          </section>
        </section>
      );

       };
export default PetsList;