// declarar arreglo

var frutas =["manzana","uva","pera","banana"];

//acceder a lo valores
console.log(frutas[2]);

//agregar elementos al array

frutas.push('kiwi');
console.log(frutas)

frutas.unshift('fresa');
console.log(frutas)

//acutalizar 
frutas[2]="mandarina ";

frutas.pop();
console.log(frutas) 

frutas.shift();
console.log(frutas)


frutas.forEach(function(fruta){
    console.log(fruta)
})


console.log('============================')

frutas.map(function(fruta){
    console.log(fruta)
})

var frutasForeach = frutas.forEach(function(fruta){
    return fruta;
})



var frutasMap = frutas.forEach(function(fruta){
    return fruta;
})

console.log(frutas)