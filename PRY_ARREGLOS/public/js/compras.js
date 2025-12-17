var btn_agregar = document.getElementById('btn_agregar');
var btn_limpiar = document.getElementById('btn_limpiar');

var lista_productos = document.getElementById('lista_productos');
var lista2 = document.getElementById('lista2'); 

var lista_producto = [];

btn_agregar.addEventListener('click', function(){
    var nombre_producto = document.getElementById('txt_producto');

    if(nombre_producto.value != ''){
        lista_producto.unshift(nombre_producto.value);
        mostrarListado();
        nombre_producto.value = '';
    } else {
        console.log("POR FAVOR INGRESE EL NOMBRE DEL PRODUCTO");
    }
});

btn_limpiar.addEventListener('click', function(){
    lista_producto = [];
    lista_productos.innerHTML = '';
    lista2.innerHTML = '';
});

function mostrarListado(){
    lista_productos.innerHTML = '';
    lista2.innerHTML = '';

    lista_producto.forEach(function(producto){
        var li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = producto.toLowerCase();
        lista_productos.appendChild(li);
    });

    lista_producto.forEach(function(producto){
        var li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = producto.toUpperCase();
        lista2.appendChild(li);
    });
}
