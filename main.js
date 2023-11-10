// array di oggetti
let team = [
    membro1 = {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    membro2 = {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    membro3 = {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    memebro4 = {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    memebro5 ={
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    membro6 = {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
]

// stampo l'array con un ciclo for
for (let i = 0; i < team.length; i++) {
    let individuo = team[i];
    // stampo gli oggetti
    console.log(individuo);

    // stampo con for in
    for (const key in individuo) {
        console.log(`memebro-${i}`, key, individuo[key]);
    }
}

