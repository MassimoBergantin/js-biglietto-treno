
var x = prompt("Quanti km vuoi percorrere?");
var y = prompt("Quanti anni hai?");

// calcolo il prezzo della risposta al prima domanda (var x) sapendo che il prezzo è di 0,21 * KM

var prezzo = x * 0.21;

// calcolo il prezzo scontato che minorenni e anziani andranno a pagare 

var scontoMinorenni = prezzo / 100 * 20;
var prezzoMinorenni = prezzo - scontoMinorenni;

var scontoAnziani = prezzo / 100 * 20;
var prezzoAnziani = prezzo - scontoAnziani; 


// Math.round per arrotondare

if( x < 18) {
    document.getElementById("output").innerHTML = Math.round(prezzoMinorenni);
}else{ if (y > 65){
    document.getElementById("output").innerHTML = Math.round(prezzoAnziani);
}else{
    document.getElementById('output').innerHTML =  Math.round(prezzo);
}

}

















