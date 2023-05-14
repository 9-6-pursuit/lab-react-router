import {Owner} from "./Owner";

export const OwnerList = ({ owners }) => {
  const mappedOwners = owners.map((owner) => (
    <Owner key={owner.id} owner={owner} />
  ));

  return (
    <section className="owner-list">
      <h2>The Owners</h2>
      <div className="owners">{mappedOwners}</div>
    </section>
  );
};
export default OwnerList;