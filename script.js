// const p = document.querySelectorAll('p'); //Asi entras a todas las etiquetas
// const parrafito = document.getElementsByClassName('parrafito'); //Asi entras a las clases
// const pid = document.getElementById('pid'); //Asi entras a los ID.
const h1 = document.querySelector('h1'); //Asi entras a las etiquetas
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaImputs = +input1.value + +input2.value;
    pResult.innerHTML = "El Resultado es: " + sumaImputs + ".";
}



















// console.log(h1);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'Jackson';
// h1.innerText = 'Jackson';

// //console.log(h1.getAttribute('class')); //muestra el valor del atributo class de la etiqueta h1.
// //h1.setAttribute('class', 'azul'); //asi cambiamos el valor de ese atributo.


// h1.classList.add('rojo'); //agrega clases a la etiqueta
// h1.classList.remove('verde'); //elimina clases a la etiqueta

// input.value = 456; //cambiamos el valor del input

// // console.log(document.createElement('img')); //creamos una etiqueta html...(pero este no se renderiza?).
// const img = document.createElement('img');
// img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
// console.log(img);

// pid.appendChild(img);





// console.log(document.getElementsByTagName('li')); // Accede al elemento por medio de la etiqueta 'li'.
// console.log(document.getElementsByClassName('card')); // Accede al elemento por medio de la clase 'card'.
// console.log(document.getElementsByName('nombre')); // Accede al elemento por medio del atributo 'name' del documento, name se utiliza en los formularios.
// console.log(document.getElementsById('menu')); // Accede al elemento por medio del Identificador 'menu'.


// console.log(document.querySelector('a')); // Accede al elemento por medio de la etiqueta 'a'. Accede solo al primer elemento de tipo 'a' del documento.
// console.log(document.querySelectorAll('a')); // Accede al elemento por medio de la etiqueta 'a'. Accede a todos los elemento de tipo 'a' del documento.
// console.log(document.querySelectorAll('.card')[2]); // Accede al elemento por medio de la clase '.card' y busca el elemento en la pocision indicada.
// console.log(document.querySelectorAll('.menu li')); // Accede a todos los elementos 'li' que tengan la clase 'menu'.