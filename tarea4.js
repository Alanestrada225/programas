var sinfinita=1,x=2,cont=1,suma=0;
for(i=1;i<=sinfinita;i++)
function sinfinita(numero,cont)
console.log(sinfinita)
{
suma+=(sinfinita(x,cont));
cont ++;
console.log(sinfinita)
}
function sinfinita(numero,cont)
{
    var sinfinita=0;
    sinfinita=numero-1;
    sinfinita/=numero;
    sinfinita=Math.pow(sinfinita,cont);
    sinfinita(1/cont*sinfinita)

    return sinfinita;

}