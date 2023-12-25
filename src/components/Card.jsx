import { useState } from 'react'

export default function Card({id}){
    const [[cardText,imageSrc],setpokename] = useState(["",""]);
    async function data(id){
      const responce =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{mode:'cors'});
      const pokemon  = await responce.json();
      setpokename([pokemon.name,pokemon.sprites.front_default]);
    }
    data(id);
    return(
        <>
        <div className="card flex flex-col items-center m-3 w-72 h-96 bg-green-600 cursor-pointer transition delay-20">
            <div className="card-image ">
                <img src={imageSrc} style={{height:"300px", width:"300px"}} />
            </div>
            <div className="card-text bg-green-900 text-white bottom-0">{cardText}</div>
        </div>
        </>
    );

}