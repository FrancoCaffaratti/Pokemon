const Pokemon = require('./Pokemon')
const Entrenador = require('./Entrenador')
const Juego = require('./Juego')

let partida = new Juego('Pokemon Rojo Fuego')
let charizard = new Pokemon('Charizard', 'Fuego')
let snorlax = new Pokemon('Snorlax', 'Normal')
let pikachu = new Pokemon('Pikachu', 'Electrico')

let entrenador1 = new Entrenador('Ash')
let entrenador2 = new Entrenador('Misty')

entrenador1.capturar(charizard)
entrenador1.pokedex()
entrenador1.victoria()
console.log(entrenador1.mostrarBatallas())
console.log(entrenador1.mostrarInformacion())


entrenador1.capturar(pikachu)
entrenador1.pokedex()

entrenador1.filtrarPokedexPorTipo('Electrico')

entrenador2.capturar(snorlax)
entrenador2.pokedex()

entrenador2.filtrarPokedexPorTipo('Fuego')

console.log(entrenador1.liberarPokemon().atributos())