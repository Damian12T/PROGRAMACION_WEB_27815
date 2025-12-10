var btn_metros= document.getElementById('btn_metros');
btn_metros.addEventListener('click',function(event){
let n1 =document.getElementById('metros1').value;
let resultado=document.getElementById('metros_resultado');
resultado.innerHTML=parseFloat(n1)/(1000);

});