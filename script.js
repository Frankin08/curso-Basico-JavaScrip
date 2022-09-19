
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

        //Modificar el h1 del codigo HTML
        
//h1.innerHTML = 'Patito <br> XD';
h1.innerText = 'Patito <br> XD'; //Solo texto no lee html

//h1.getAttribute('pantalla'); 
//h1.setAttribute('class', 'rojo'); //Modificar nombre de clase

h1.classList.add('rojo'); //agregar a la clase
h1.classList.remove('verde');

//h1.classList.toggle('verde');//dependiendo de si ya tiene la clase la quita o la pone 
//h1.classList.contains('verde') //verdadero o falso dependiendo i el elemento tiene la clase buscada (pasada por   parametro)

input.value = "456";

        //crear elemento de html desde cero en js

const img = document.createElement('img'); //creamos imagen
img.setAttribute('src', 'http://imagenesparacelulares.net/wp-content/uploads/2015/10/memesgraciosos10-300x298.jpg');
console.log(img);

pid.innerHTML = ""; //Se elimina el contenido que habia eseelemento por un espacio vacio
pid.append(img); //insertando imagen en pid

