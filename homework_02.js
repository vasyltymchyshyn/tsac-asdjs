
/*//
Esercizio 1

Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore

negativo


function ex_n_F(x) {
    return funzione(x);
}

*/




/*
Esercizio 2

Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari

*/


function creaArray(n){
           vett=[];
                for(i=0;i<n;i++){
                    vett.push(i);
                }
                return vett;
             }  


    function firstOddF(n) {
    return creaArray(2 * n).filter(x => x % 2 != 0).reduce((acc, x) => acc + x, 0);
}




function ex_2_F(x) {
    return firstOddF(x);
}        



/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media

*/

function es3(vett){
    return vett.reduce((acc,x)=> acc+x,0 )/vett.length;
}

function ex_3_F(vett){
    return es3(vett);
}



/*
Esercizio 4

Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri

compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,

calcolare la somma nell’intervallo [b,a]

Esempio:

sumInterval(3, 5) => 12

sumInterval(5, 3) => 12


*/
function creaArraydaAaB(a,b){

    array=[];
    for(;a<=b;a++){
        array.push(a);
    }
    return array;
}

function es4(a,b){
   
    if(a>b){
        var c=a;
        a=b;
        b=c;
    }
    return creaArraydaAaB(a,b).reduce((acc,x)=> acc+x,0);
}





function ex_4_F(a,b) {
    return es4(a,b);
}    

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.

Esempio:

mult(2, 3) => 6


*/



function creaArrayBelementi(a,b){

    vettore=[];

    for(i=0;i<b;i++){
        vettore.push(a);

    }
    return vettore;

}

function es5(a,b){
    return creaArrayBelementi(a,b).reduce((acc,x)=>acc+x,0);
}

function ex_5_F(a,b) {
    return es5(a,b);
} 