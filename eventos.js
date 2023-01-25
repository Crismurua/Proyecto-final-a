// Tengo dos botones para restablecer y cambiar el fondo

document.getElementById("boton").addEventListener("click", function () {
    let contador = 0;
    contador += 1                                
    document.getElementById("demo").innerHTML = `Evento ${contador} Probado`;
    for(let i = 0; i<5; i++){
        console.log("El valor de contador es : ", i)
    } 
});

document.getElementById("boton-color").addEventListener("click", function () {
    document.body.style.backgroundColor= "red";

});

document.getElementById("boton-restb").addEventListener("click", function () {
    document.body.style.backgroundColor= "aqua";

});

document.getElementById("boton-ocultar").addEventListener("click", function () {
    document.getElementById("demo").style.display= "none";

});

function suma(a, b){
    console.log(a + b)
}