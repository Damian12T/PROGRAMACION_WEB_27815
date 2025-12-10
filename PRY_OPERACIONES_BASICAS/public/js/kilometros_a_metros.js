
var btn_kil= document.getElementById('btn_kil');
btn_kil.addEventListener('click',function(event){
let n1 =document.getElementById('kil_1').value;
let resultado=document.getElementById('kil_resultado');
resultado.innerHTML=parseFloat(n1)*(1000);


});