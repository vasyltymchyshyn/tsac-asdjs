
function merge(array1,array2){
    var i1=0;
    var i2=0;  
    var array3=[];
    while(i1<array1.length && i2<array2.length)
    {

            if(array1[i1]<=array2[i2])
            {
                            console.log("primo i1<i2,-- i1: "+array1[i1]+" i2: "+array2[i2]);
                array3.push(array1[i1]);
                             console.log("inserisco "+array1[i1]);

                i1++;


            }else if(array2[i2]<=array1[i1]){
                         console.log("secondo i2<i1,-- i2: "+array2[i2]+" i1: "+array1[i1]);
                         console.log("inserisco "+array2[i2]);
                array3.push(array2[i2]);
                i2++;
            }

    }

    if (i1<array1.length){
    array3 =array3.concat(array1.slice(i1))
    }
    if( i2<array2.length){
    array3 =array3.concat(array2.slice(i2))
    }


  
return array3;

}

