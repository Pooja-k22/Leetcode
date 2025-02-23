/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x=x.toString(2) // converting to bits
    y=y.toString(2)

    if(x.length<y.length){     //for checking both in same length (4 bit)
        while(x.length!=y.length){  
            x='0'+x                // adding 0 in starting if not
        }
    }
    else{
        while(x.length!=y.length){
            y='0'+y
        }
    }
d=0
for(i=0;i<x.length;i++){
    if(x[i]!==y[i]){
        d++
    }
}
return d
};