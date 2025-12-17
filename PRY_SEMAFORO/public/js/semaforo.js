// var btn_mostrar_numeros = document.getElementById("btn_mostrar_numeros");
// var txt_resultado = document.getElementById("txt_numeros");

// btn_mostrar_numeros.addEventListener("click", function () {
//     let numeros = "";
//     for (let i = 1; i <= 10; i++) {
//         numeros+= `${i} <br>`;
//     }
//     txt_resultado.innerHTML = numeros;

// });

var btn_mostar=document.getElementById("btn_mostar");
var txt_resultado = document.getElementById("txt_resultado");
btn_mostar.addEventListener("click", function () {
    var txt_n2=document.getElementById("txt_n2");
    var txt_n1=document.getElementById("txt_n1");
    let numeros = "";
    for (let i = parseInt(txt_n1.value); i <= parseInt(txt_n2.value); i++) {
        numeros+= `${i} <br>`;
    }
    txt_resultado.innerHTML = numeros;

});