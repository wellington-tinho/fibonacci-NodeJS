'use strict'

const fibonacci = () => {
  var num=1;
  var aux=0;
  var previos=0;

  var array=[]

  do{
    array.push(previos)

    num=num+aux;
    aux=previos;
    previos=num;

   
  }while(aux<=350);

    return array
}

const isFibonnaci = (n) => {
    var num=1;
    var aux=0;
    var previos=0;
  
    var array=[]
    
        do{
        array.push(previos)
    
        num=num+aux;
        aux=previos;
        previos=num;
    
        
        }while(aux<=n);
        console.log(array)
    if(array.indexOf(n)){
        return console.log(true)
    }
    return console.log(false)
}

module.exports = {
    fibonacci,
    isFibonnaci
}
