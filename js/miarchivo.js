


/*let numeroCuotas = parseInt(prompt("ingrese numero de cuotas"));


tresCuotas = x => x * 0.33;
cuatroCuotas = x => x * 0.66;
doceCuotas = x => x * 1.20;

let = valorInicial = 1200;

let  nuevoPrecio = tresCuotas (valorInicial);
console.log(nuevoPrecio);*/
/*if(numeroCuotas === 3){

   resultado = tresCuotas(valorInicial);
    alert(resultado);
    
  }

*/


let valorInicial = parseFloat(prompt("ingrese valor del producto"));

let numeroCuotas = parseFloat(prompt ("ingrese numero de cuotas"));
const  tresCuotas = x => x * 0.33;
const  seisCuotas = x => x * 0.663;
const doceCuotas = x => x  * 1.20;


 function calcular(){
if(numeroCuotas === 3){
let resultado = tresCuotas(valorInicial);
let asd = resultado + valorInicial;
alert("el valor con intereses es de " + asd);
}
 if (numeroCuotas === 6){
    let resultado = seisCuotas(valorInicial);
    let asd = resultado + valorInicial;
    alert("el valor con intereses es de " + asd);
}
else if(numeroCuotas === 12){
   let resultado = doceCuotas(valorInicial);
   let asd = resultado + valorInicial;
   alert("el valor con intereses es de " + asd);
}
else{
    alert("ingrese numero de cuotas");

}
 
 }
 calcular()