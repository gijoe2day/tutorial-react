import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninjas" key={ninja.id}>
        <h2>My name is {ninja.name} </h2>
        <div>My age is {ninja.age}</div>
        <div>My belt is {ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
