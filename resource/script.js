"use strict";

// let api_key = "f6225674761674369c0e3cbc25da2c3c";
let habilidades = []
let tipos = []
const formulario = document.getElementById("formulario");
const divInterno = document.createElement("div");
const divHtml = document.getElementById("divHtml");
divInterno.classList.add("divInterno");


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const pokemon = document.getElementById("ciudad").value;
  fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  )
    .then((response) => response.json())
    .then((data) => {
      for(let i = 0; i < data.abilities.length; i++){
        habilidades.push(data.abilities[i].ability.name);
      }
      for (let i = 0; i < data.types.length; i++){
        tipos.push(data.types[i].type.name);
      }
      divInterno.innerHTML = `
        <h1>Nombre: ${data.name}</h1>
        <p>Id: ${data.id}</p>
        <p>Base de Experiencia: ${data.base_experience}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <img src="${data.sprites.front_shiny}" alt="${data.name}">
        <p>Altura: ${data.height}</p>
        <p>Peso: ${data.weight}</p>
        <p>habilidades: ${habilidades}</p>
        <p>Tipo: ${tipos}</p>
      `;
      divHtml.appendChild(divInterno);
      tipos = []
      habilidades = []
    })
    .catch((error) => {
      console.log(error);
    });
    // Caracteristica para reiniciar el formulario luego del fetch
    formulario.reset()
  
});



