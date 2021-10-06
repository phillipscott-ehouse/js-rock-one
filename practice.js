
const pokemonForm = document.getElementById('pokemon-form');

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValue = document.getElementById('pokemon-name').value;

    // Fetch Pokemon
    fetch('https://pokeapi.co/api/v2/pokemon/' + inputValue + '/')
    .then((blob) => blob.json())
    .then((response) => {
        AssignPokemon(response);
    });
});

const AssignPokemon = (response) => {
    console.log(response);
    
    const pokemonTable = document.querySelector('.pokemon-table');
    pokemonTable.innerHTML = '';

    // Assign Pokemon Attributes
    let pokemonName = response.name,
    pokemonType = response.types,
    pokemonImage = response.sprites.back_default,
    pokemonAbilities = response.abilities;

    console.log("Pokemon: ", pokemonType)

    // Build Pokemon Components
    let pokemonTableName = document.createElement('th');
    let pokemonTableType = document.createElement('th');
    let pokemonTableImage = document.createElement('th');
    let pokemonImageEl = document.createElement('img');
    let pokemonTableAbilities = document.createElement('th');

    // Place data in Components
    pokemonTableName.textContent = pokemonName;
    pokemonImageEl.setAttribute('src',pokemonImage);

    // Loop over arrays
    pokemonAbilities.forEach((ability) => {
        pokemonTableAbilities.append(ability.ability.name + " , ");
    });

    pokemonType.forEach((type) => {
        pokemonTableType.append(type.type.name + " , ");
    });

    // pokemonTableType.textContent = pokemonType;
    pokemonTableImage.append(pokemonImageEl);
    pokemonTable.append(pokemonTableName, pokemonTableType, pokemonTableImage, pokemonTableAbilities);
}