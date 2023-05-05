


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


let valorInicial = 1200;

let numeroCuotas = parseFloat(prompt ("ingrese numero de cuotas")),
tresCuotas = x => x * 0.33;
seisCuotas = x => x * 0.663
doceCuotas = x => x  * 1.20;


 
if(numeroCuotas === 3){
let resultado = tresCuotas(valorInicial);
let asd = resultado + valorInicial;
alert("el valor con intereses es de " + asd);
}
else if (numeroCuotas === 6){
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
