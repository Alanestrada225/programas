var numero=6;
var suma=1;
var conteo=0;
var resta=0;
console.log (filas(numeros));
function filas(numeros){
    for(var i=1;i<=numero;i++){
        conteo++;
        suma+=i/conteo;
        console.log(suma);
    }
}