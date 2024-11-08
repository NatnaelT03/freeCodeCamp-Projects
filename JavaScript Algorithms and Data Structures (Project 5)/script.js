// Pokemon Search App Project JavaScript File 

const mainAPi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const typeOutput = document.getElementById('types');
const imageOutput = document.getElementById('img');
const nameOutput = document.getElementById('pokemon-name');
const idOutput = document.getElementById('pokemon-id');
const weightOutput = document.getElementById('weight');
const heightOutput = document.getElementById('height');
const inputReceiver = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');

async function getPokemonData(pokemonNameOrId) {
    try {
        const newAPi = `${mainAPi}/${pokemonNameOrId}`;
        const res = await fetch(newAPi);

        if (!res.ok) throw new Error("Pokémon not found");

        const data = await res.json();
        const { name, id, height, weight, sprites, types, stats } = data;

        nameOutput.innerText = "";
        idOutput.innerText = "";
        weightOutput.innerText = "";
        heightOutput.innerText = "";
        imageOutput.innerHTML = ""; 
        typeOutput.innerHTML = ""; 
        stats.forEach(stat => {
            document.getElementById(stat.stat.name).innerText = "";
        });

        nameOutput.innerText = name.toUpperCase();
        idOutput.innerText = `#${id}`;
        weightOutput.innerText = `Weight: ${weight}`;
        heightOutput.innerText = `Height: ${height}`;
        imageOutput.innerHTML = `<img src="${sprites.front_default}" id="sprite" alt="Image of ${name}"/>`;

        types.forEach((type) => {
            const typeElement = document.createElement('p');
            typeElement.classList.add('types');
            typeElement.innerText = type.type.name.toUpperCase();
            typeOutput.appendChild(typeElement);
        });

        stats.forEach(stat => {
            document.getElementById(stat.stat.name).innerText = stat.base_stat;
        });

    } catch (err) {
        alert("Pokémon not found");
        console.log(err);
    }
}


searchBtn.addEventListener('click', () => {
    const searchValue = inputReceiver.value.trim().toLowerCase();
    if (searchValue) getPokemonData(searchValue);
});

inputReceiver.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const searchValue = inputReceiver.value.trim().toLowerCase();
        if (searchValue) getPokemonData(searchValue);
    }
});
