let jugadores = ['Ana', 'Rafa'];
let apuesta = [];
let canicas = [];
let finJuego = false;


// $(document).ready(function(){
//     for (let i = 0; i < jugadores.length; i++) {
//         do{ //Para que no se apuesten canicas de más
//             var can = parseInt(prompt("Jugador " + jugadores[i] + " cuantas canicas apuesta"));
//         }while(can > 3 || can < 0);
//         canicas[i] = can;
//         do{ //Para que no se repitan las apuestas
//             var num = parseInt(prompt("Jugador " + jugadores[i] + " haga su apuesta"));
//         }while(apuesta.includes(num));
//         apuesta[i] = num;
//     }
//     console.log("Las apuestas son: " + apuesta + " y las canicas que hay son " + canicas);
// });


function apostar(){
    // <p>Llevo: <input id="canica" type="number"> Apuesto: <input id="apuesto" type="number"> </p>
    //     <button id="apostar" onClick="apostar()">Apostar</button>
    //     <button id="ganador" onClick="verGanador()">Abrir y ver ganador</button>
    //     <button id="newGame" onClick="refreshPage()">Otra partida</button>
    canicas[0] = document.getElementById(canica);
    apuesta[0] = document.getElementById(apuesto);
    for (let i = 1; i < jugadores.length; i++) {
        canicas[i] = Math.floor(Math.random()*3); //Elige un num entre 3 y 0
        do{ //Para que no se repitan las apuestas
           var num = Math.floor(Math.random()*9); //Elige un num entre 9 y 0
        }while(apuesta.includes(num));
        apuesta[i] = num;
    }
    console.log("Las apuestas son: " + apuesta + " y las canicas que hay son " + canicas);

}

function verGanador(){
    let suma = 0;
    //Sumo el número de canicas
    for (let i = 0; i < canicas.length; i++) {
        suma += canicas[i];
    }
    console.log("El numero de canicas que hay es " + suma);
    //Veo cual es la apuesta ganadora
    for (let j = 0; j < apuesta.length; j++) {
        if (suma === apuesta[j]){ 
            if(j===1){
                $("#medalla1").attr('src', 'medal.png');
            }else if (j===2){
                $("#medalla2").attr('src', 'medal.png');
            }
            finJuego = true;
        }
    }
    if(finJuego === false){
        alert("Nadie ha ganado");
    }

}

function refreshPage(){
    let apuesta = [];
    let canicas = [];
    let finJuego = false;

}