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


/************************** FUNCTIONS *******************************/

// faccio una funzione create card, che mi ritorna l'inserimento l'inserimento nell'html 
// dove cardData sono i dati del nuovo utente
function createCard(cardData) {
    let result = `
    <div class="box bg-primary text-dark my-5">
        <img src="./img/${cardData.foto}">
        <p class="nome text-center fs-3">${cardData.nome}</p>
        <p class="ruolo text-center fs-4">${cardData.ruolo}</p>
    </div>`;

    return result;
}


// funzione che mi rendereizza a schermo le card che ho nell'array
function renderCards() {
    // mi prendo il container 
    let container = document.querySelector('.box-container');

    // lo svuoto ogni volta che ricarico la pagina
    container.innerHTML = '';

    // e ciclo con l'object array che ho
    // stampo l'array con un ciclo for
    for (let i = 0; i < team.length; i++) {
        let individuo = team[i];
        // stampo gli oggetti
        // console.log(individuo);
        
        // mi prendo la funzione creatMemeber
        let personCard = createCard(individuo);
        container.innerHTML += personCard;
        
        
        // stampo con for in
        for (const key in team[i]) {
            console.log(`memebro-${i}`, key, individuo[key]);
            // document.querySelector('#team').innerHTML += `${key}: ${individuo[key]}<br>`;
            
            // document.createElement('div').innerHTML
            // document.classList.add('');
            
        }
        console.log('--------------------------------');
    }
}


// function addMember, consente di aggiungere personal attraverso un form
function addMember() {
    
    // mi prendo il valore dal form
    let newName = document.querySelector('#newName').value;
    let newRole = document.querySelector('#newRole').value;
    let newImage = document.querySelector('#newImage').value;
    
    // SE l'immagine è nulla do di default un immagine
    if (newImage == '') {
        newImage = "placeholder.jpg";
    }

    // mi creo l'oggetto con il nuovo memebro che verrà inserito nel render
    let newMember = {
        nome: newName,
        ruolo: newRole,
        foto: newImage
    }

    // aggiungo il memebro nuovo nel team
    team.push(newMember);
    
    let container = document.querySelector('.box-container');
    container.innerHTML += createCard(newMember);
}

/************************** CARICAMENTO PAGINA *******************************/
renderCards();

// cal click del bottone aggiungo il newMemeber
document.querySelector('#addMemberBtn').addEventListener('click', addMember);
/************************** CARICAMENTO PAGINA *******************************/
