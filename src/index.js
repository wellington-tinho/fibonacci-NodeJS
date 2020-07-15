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

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
