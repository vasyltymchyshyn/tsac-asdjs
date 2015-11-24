
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




function binary(n){
  

    var s1 = new Stack();
        while(Math.floor(n/2) !=0) {
            s1.push(n%2);
            n=Math.floor(n/2);

//console.log(Math.floor(n));


 }

        s1.push(n%2);
        var stringa='';
        while(s1.isEmpty() !=true){

        sstringa+=s1.pop().toString();


}

return stringa;


}