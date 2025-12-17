var btn_mostrar = document.getElementById("btn_mostrar");
var txt_resultado = document.getElementById("txt_resultado");

btn_mostrar.addEventListener("click", function() {

    var inicio = parseInt(document.getElementById("txt_numero_inicio").value);
    var fin = parseInt(document.getElementById("txt_numero_final").value);

    let pares = "";
    let impares = "";
    let contPar = 0;
    let contImpar = 0;

    for (let num = inicio; num <= fin; num++) {

        if (num % 2 === 0) {
            pares += num + " / ";
            contPar++;
        } else {
            impares += num + " / ";
            contImpar++;
        }
    }

    txt_resultado.innerHTML = 
        "PARES (" + contPar + "):<br>" + pares + "<br><br>" +
        "IMPARES (" + contImpar + "):<br>" + impares;
});
