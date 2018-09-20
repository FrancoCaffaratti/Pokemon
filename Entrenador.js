module.exports = class Entrenador {
    constructor(nombre, ciudad, pokemons=[]) {
        this.nombre = nombre
        this.ciudad = ciudad
        this.pokemons = pokemons
        this.batallas = {
            jugadas: 0,
            ganadas: 0,
            perdidas: 0
        },
        this.equipo = this.elegirEquipo()
    }

    elegirEquipo() {

        let equipos = ['Amarillo', 'Rojo', 'Azul']
        return equipos[Math.floor(Math.random()*equipos.length)]
        
    }

    mostrarInformacion() {
        return `NOMBRE: ${this.nombre} - CIUDAD: ${this.ciudad} - POKEMON: ${this.pokedex()} - BATALLAS: ${this.mostrarBatallas()}`
    }
    
    victoria(victoria=true) {
        if (victoria) {
            this.batallas.ganadas++
        }
        else {
            this.batallas.perdidas++
        }
    }

    mostrarBatallas() {
        return `EQUIPO> ${this.equipo} - JUGADAS: ${this.batallas.jugadas} - GANADAS: ${this.batallas.ganadas} - PERDIDAS: ${this.batallas.perdidas}`
    }

    mostrarNombre() {
        return this.entrenador
    }

    pokedex() {
        this.pokemons.map(pokemon => {
            return pokemon.atributos()
        })
    }

    capturar(pokemon) {
        this.pokemons.push(pokemon)
        console.log(`${pokemon.nombre} ha sido capturado`)
    }

    filtrarPokedexPorTipo(tipo) {
        console.log('Filtrando Pokemons: ')
        let pokemonsFiltrados = this.pokemons.filter(pokemon => {
            return pokemon.tipo === tipo
        })
        if (pokemonsFiltrados.length === 0) {
            console.log('No se ha encontrado ningun resultado')
        }    
        pokemonsFiltrados.map(pokemon => {
            console.log(pokemon.atributos())
        })
    }

    liberarPokemon() {
        let pokemonLiberado = this.pokemons.find(pokemon => {
            return pokemon.estado
        })

        return pokemonLiberado
    }


}