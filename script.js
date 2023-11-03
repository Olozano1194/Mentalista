const secretNumber = parseInt(Math.random() * 100 + 1);

let userOption
let contador = 0;
let contadorTotal = 5;
let contadorJugador = 0;

while (userOption != secretNumber && contador < contadorTotal) {
    
    userOption = parseInt(prompt('Digite un numero entero de 1 a 100'));
    // userOption = parseInt(userOption);

    if (userOption === secretNumber) {
        alert(`Acertaste!!!, el número secreto es ${secretNumber}`);
        break;
    }else if (userOption > secretNumber ) {
    
        alert(`el número ${userOption} digitado es mayor al número secreto`);
        contadorJugador ++;
        alert(`El jugador ha tratado de adivinar ${contadorJugador}`);
        
    }else if (userOption < secretNumber) {
        alert(`el numero ${userOption} es menor al número secreto`);
        contadorJugador ++;
        alert(`El jugador ha tratado de adivinar ${contadorJugador}`);
        
    }
contador++;         
}

if (contadorTotal === contador ) {
    alert(`Completaste las oportunidades....Perdiste, el número secreto era ${secretNumber}`);
}
    











