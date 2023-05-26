import { useState } from "react";

import { useNavigate } from "react-router-dom";


export default function NewPet( {pets, setPets} ) {
  let navigate = useNavigate();

  const [newPet, setNewPet] = useState({
    id: "",
    name: "",
    kind: "",
    breed: "",
    employeeId: "",
  });

  function handleTextChange(event) {
    setNewPet({
        ...newPet,
        [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPets({
        ...pets,
        ...newPet
    })
    navigate(`/pets/*`)
  }
return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:
        <input
            type="text"
            id="id"
            value={newPet.id}
            onChange={handleTextChange}/>
        </label>
        
        <label htmlFor="name">Name:
        <input
            type="text"
            id="name"
            value={newPet.name}
            onChange={handleTextChange}/>
        </label>
        
        <label htmlFor="id">Kind:
        <input
            type="text"
            id="kind"
            value={newPet.kind}
            onChange={handleTextChange}/>
        </label>
       
       <label htmlFor="id">Breed:
        <input
            type="text"
            id="breed"
            value={newPet.breed}
            onChange={handleTextChange}/>
        </label>
       
        <label htmlFor="employeeId">Employee ID:
        <input
            type="text"
            id="employeeId"
            value={newPet.employeeId}
            onChange={handleTextChange}/>
        </label>

            <input type="submit" />
    </form>
    )
}