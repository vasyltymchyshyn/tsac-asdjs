
// ..
function ex_1a(array){

     if(array.length==0){
         return 10;
     }else{
        return 5 * array[0]+ ex_1(array.slice(1));  
     }
 }




function es_1_Somma_Quadranti(array){
     somma=0;
  for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            somma +=Math.pow(array[i],2);    
        }    
    }
  return somma;
}

function ex_1b(array){
  var somma;
  var i;
    
  if(array.length==0){
    return somma=0
  }else{
    if(array[0]%2!=0){
      array[0]=0;
    }else{
      i=array[0]*array[0];
      array[0]=i;
    }
    return somma= array[0]+ex_1a(array.slice(1));
  }


}
//
 function ex_2(n) {
    return n.filter(x => x % 2 == 0).map(function(num){return num*num;}).reduce((acc, x) => acc+x,0);
}
 
 function es_2_f_reduce(n){
   return n.reduce(function(acc,x){
     if(x%2==0){
       return acc+(x*x);
     }else{
       return acc;
     }
   },0);
 }



function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {  
    //this.myarray[this.myarray.length] = e;
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}




 function ex_3(array){

   var moltiplicazione=0;
   var uscita=false;


   var arrayPari=new Stack();
   var arrayDispari=new Stack();

    for(i=0;i<array.length;i++){

         if(array[i]%2==0){
           arrayPari.push(array[i]);
         }else{
           arrayDispari.push(array[i]);
           }
         }


    while(!uscita){
      if(arrayPari.isEmpty()==true || arrayDispari.isEmpty()== true){
            uscita=true;
      }else{
       moltiplicazione =moltiplicazione+(arrayPari.pop()*arrayDispari.pop())
      }
    }

    
 return moltiplicazione;
       }














