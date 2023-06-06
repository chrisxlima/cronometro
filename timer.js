let horas = 0;
let minutos = 0;
let segundos = 0;

let tempo = 1000; //milésimos por segundo
let crono;

function start() {
    time();
    crono = setInterval(time, tempo);
}

function pause() {
    clearInterval(crono);
}

function stop() {
    clearInterval(crono);
    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById('cronometro').innerHTML = `00:00:00`
}

function time() {

    segundos++;
    if(segundos==60) {
        segundos = 0;
        minutos++;
        if(minutos==60){
            minutos= 0;
            horas++;
        }
    }

    let formato = `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos:minutos}:${segundos < 10 ? '0' + segundos:segundos}`
document.getElementById('cronometro').innerHTML = `${formato}`;
}