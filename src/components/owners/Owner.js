export const Owner = ({ owner }) => {
  const { firstName, lastName, id, zipCode } = owner;
  let name = `${firstName} ${lastName}`;

  return (
    <article className="owner">
      <h3>{name}</h3>
      <p>Zip Code: {zipCode}</p>
      <p>ID #{id}</p>
    </article>
  );
};
export default Owner;
