module.exports = class Pokemon {
    constructor(nombre, tipo, nivel = 1, estado = true) {
        this.nombre = nombre
        this.nivel = nivel
        this.ps = Math.floor(Math.random() * 100) + 1
        this.ataque = Math.floor(Math.random() * 15) + 1
        this.defensa = Math.floor(Math.random() * 45) + 1
        this.tipo = tipo
        this.estado = estado
        this.batallas = {
            jugadas: 0,
            ganadas: 0,
            perdidas: 0
        }
        this.fecha = new Date()

    }

    victoria(victoria = true) {
        if (victoria) {
            return this.batallas.ganadas++
        }
        else {
            return this.batallas.perdidas--
        }
    }
    

    mostrarBatallas() {
        return `JUGADAS: ${this.batallas.jugadas} - GANADAS: ${this.batallas.ganadas} - PERDIDAS: ${this.batallas.perdidas}`
    }

    atributos() {

        let estado = this.estado ? 'Vivo' : 'Muerto'

        // switch (this.estado) {
        //     case true:
        //         estado = 'Vivo'
        //         break;

        //     default:
        //         estado = 'Muerto'
        //         break;
        // }

        return `NOMBRE: ${this.nombre} - TIPO: ${this.tipo} - NIVEL: ${this.nivel} - ESTADO: ${estado} - PS: ${this.ps} - ATAQUE: ${this.ataque} - DEFENSA: ${this.defensa} | BATALLAS: ${this.mostrarBatallas()} - FECHA DE CAPTURA: ${this.fecha} `
        // 'Nombre: '+this.nombre+'
    }
}