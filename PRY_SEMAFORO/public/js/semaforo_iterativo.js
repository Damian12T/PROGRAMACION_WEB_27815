var btn_mostrar = document.getElementById("btn_mostrar_numeros");
var txt_mostrar_resultado = document.getElementById("txt_mostrar_resultado");

btn_mostrar.addEventListener("click", function(event){
    
    var txt_numero_final = parseInt(document.getElementById("txt_numero_final").value);
    var txt_numero_inicio = parseInt(document.getElementById("txt_numero_inicio").value);
    let numeros="";

    for (let index = txt_numero_inicio; index <= txt_numero_final; index++) {
        numeros += `Numero: ${index} impreso <br>`;
    }

    txt_mostrar_resultado.innerHTML = numeros;
});
