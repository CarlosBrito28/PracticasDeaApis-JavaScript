const URL = 'https://randomuser.me/api/';
let contenido = document.querySelector('#contenido')
const traer = () => {

    fetch(URL).then(res => res.json()).then(data => {
        console.log(data.results['0'])
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}" width= "500px" >
        <p> nombre: ${data.results['0'].name.last}</p>
        `
    });
};