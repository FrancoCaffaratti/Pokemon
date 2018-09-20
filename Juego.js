module.exports = class Juego {
    constructor(titulo) {
        this.titulo = titulo
    }

    mostrarTitulo() {
        return `Bienvenido a ${this.titulo}`
    }

    atributosDeLosJugadores(pokemon1, pokemon2) {
        return `Jugador1: ${pokemon1.atributos()} - Jugador2: ${pokemon2.atributos()}`
    }
}