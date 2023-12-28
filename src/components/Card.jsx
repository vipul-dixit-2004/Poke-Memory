import { useState } from "react";

export default function Card({ id, updateScore }) {
  const [[cardText, imageSrc], setpokename] = useState(["", ""]);
  async function data(id) {
    const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      mode: "cors",
    });
    const pokemon = await responce.json();
    setpokename([pokemon.name, pokemon.sprites.front_default]);
  }
  data(id);
  return (
    <>
      <div
        className="card flex flex-col relative items-center m-3 w-72 h-96 mx-11 bg-white opacity-90 cursor-pointer transition delay-20 overflow-hidden"
        onClick={() => {
          updateScore(id);
        }}
        id={id}
      >
        <div className="card-image ">
          <img src={imageSrc} style={{ height: "300px", width: "300px" }} />
        </div>
        <div className="card-text text-xl w-full p-3 text-center text uppercase absolute bottom-0 bg-green-900 text-white ">
          {cardText}
        </div>
      </div>
    </>
  );
}
