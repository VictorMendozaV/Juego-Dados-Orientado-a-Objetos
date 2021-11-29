

//Código JavaScript

function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function() {
        this.jugador1.caraDado1 = parseInt(6*Math.random()+1); //usar random(1,6)
        this.jugador1.caraDado2 = parseInt(6*Math.random()+1); //usar random(1,6)

        this.jugador2.caraDado1 = parseInt(6*Math.random()+1) //usar random(1,6)
        this.jugador2.caraDado2 = parseInt(6*Math.random()+1) //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {

                return this.jugador1;
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
                return this.jugador2;
        }
        else return null;
    }
}

let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");
let juego1 = new JuegoDados(1, pedro, antonio);

let victoriasj1 = 0;
let victoriasj2 = 0;
let totalJuegos = 0;

function iniciarJuego(){

    while ((victoriasj1 != 3) && (victoriasj2 != 3)){
        juego1.tirarDados();

        let ganador = juego1.determinaGanador();

        if(ganador == juego1.jugador1){
            

            victoriasj1++;
        }
        else if(ganador == juego1.jugador2){

            victoriasj2++;
        }

        totalJuegos++;

        console.log("juego numero " + juego1.numeroJuego);
        console.log("El ganador de la partida es: " + ((ganador != null)? ganador.nombre: "Empate"));
        
        juego1.numeroJuego++;
    }
    
console.log(`Total juegos: ${totalJuegos}`)
console.log("ganador del juego: " + ((victoriasj1 == 3)? juego1.jugador1.nombre:juego1.jugador2.nombre));
}


iniciarJuego();
  
