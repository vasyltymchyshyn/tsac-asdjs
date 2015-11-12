/*
Esercizio 1///
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// Iterative
// Spazio:o(1);
// Tempo: o(n)

function es1(array){

  somma=0;
 

  for(i=0;i<array.length;i++) {
       x=array[i];
   if(x>0){ 
  somma +=x;
} else {
   return somma;
       } 
       }
 return somma;
              }
// Ricorsive
// Spazio:o(n)
// Tempo: o(n)

function es1r(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + es1r(myarray.slice(1));
    }
}


// Per Tiziano.

function ex_1_I(array)
{
return es1(array);
}

function ex_1_R(myarray) {
    return es1r(myarray);
}


/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/	
// Iterative
// Spazio:o(1) 
// Tempo: o(n)

function es2(n)
 {
 somma=0;

 for(i=0;i<n;i++)
 {
  somma +=1+2*i;
 }

  return somma;
 }


// Ricorsive
// Spazio: o(n)
// Tempo: o(n)

function es2R(n)
{
  if(n==0){

   return 0;

}else{

   return 2*n-1+es2R(n-1);
}

}

//Per tiziano

function ex_2_I(n){
   return es2(n);
}

function ex_2_R(x){
   return es2R(x);
}

/*

Esercizio 3

Dato un array di 10 elementi, calcolarne la media
*/
// Iterative
// Spazio: o(1)
// Tempo: o(n)

function es3(array2){

 somma=0;

  for(i=0;i<array2.length;i++)
  {
    var x=array2[i];
    somma +=x;
  }
  return somma/array2.length;

}
// Ricorsive
// Spazio:o(n) 
// Tempo: o(n)


function es3r(myarray) {
    if (myarray.length == 0 ) {
        return 0;
    } else {
        return myarray[0]/10 + es3r(myarray.slice(1));
    }
}

//Per tiziano

function ex_3_I(array){
    return es3(array);
}

function ex_3_R(array){
    return es3r(array);
}


/*
Esercizio 4

Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri

compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,

calcolare la somma nell’intervallo [b,a]


*/
// Iterative
// Spazio: o(1)
// Tempo:o(n)

function es4(a,b){
 somma=0;
 c=0;
 f=0;
if(b < a){

 c = b;
 f = a;
 a = c; 
 b = f;
 
 }


for(;a <= b;a++){

 somma += a;

}
return somma;


}

// Ricorsive
// Spazio: o(n)
// Tempo:  o(n)
function es4r(a,b){
    if(b==a){
        return b;
    }else{
        return a+(es4r(a+1,b));
    }

}





//Per Tiziano

function ex_4_I(a,b){
    return es4(a,b);
}

function ex_4_R(a,b){
    return es4r(a,b);
}









/*
// ESERCIZIO 5

Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.
*/

// Iterative
// Spazio:o(1) 
// Tempo: o(n)
function es5(a,b){

 somma = 0;

 for(i = 0;i < b;i++){
 somma += a;

                     }
  return somma;

                 }

// Ricorsive
// Spazio: o(n)
// Tempo:  o(n)               

function es5r(a,b){

if( a== 0){

return 0;

} else {

return b +(es5r(a-1,b));
          }
                  }

//Per Tiziano

function ex_5_I(a,b){
    return es5(a,b);
}

function ex_5_R(a,b){
    return es5r(a,b);
}
