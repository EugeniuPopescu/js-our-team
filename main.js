'use strict';

// array di oggetti
let team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
]

// mi prendo il container 
let container = document.querySelector('.box-container');


// stampo l'array con un ciclo for
for (let i = 0; i < team.length; i++) {
    let individuo = team[i];
    // stampo gli oggetti
    // console.log(individuo);
    
    let box = `<div class="box bg-primary text-dark my-5">
        <img src="./img/${individuo.foto}">
        <p class="nome text-center fs-3">${individuo.nome}</p>
        <p class="ruolo text-center fs-4">${individuo.ruolo}</p>
    </div>`

    container.innerHTML += box;
    
    
    // stampo con for in
    for (const key in team[i]) {
        console.log(`memebro-${i}`, key, individuo[key]);
        // document.querySelector('#team').innerHTML += `${key}: ${individuo[key]}<br>`;
        
        // document.createElement('div').innerHTML
        // document.classList.add('');
        
    }
    console.log('--------------------------------');
}