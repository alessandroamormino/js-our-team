// CONSEGNA: 
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


// PSEUDOCODICE: 

/*
x creo un array di oggetti contentenenti le informazioni del team: 

Wayne Barnett	  Founder & CEO	         wayne-barnett-founder-ceo.jpg
Angela Caroll	  Chief Editor	         angela-caroll-chief-editor.jpg
Walter Gordon	  Office Manager	     walter-gordon-office-manager.jpg
Angela Lopez	  Social Media Manager	 angela-lopez-social-media-manager.jpg
Scott Estrada	  Developer	             scott-estrada-developer.jpg
Barbara Ramos	  Graphic Designer	     barbara-ramos-graphic-designer.jpg


PER OGNI MEMBRO DEL TEAM
    x stampo in console le sue informazioni
    x BONUS: stampo nel DOM le sue informazioni in contenitori che stilizzerò dal CSS
    BONUS: 
    - prelevo la stringa contenente il nome dell'immagine e la imposto come src delle immagini nel DOM
*/


// CODE: 

// - creo un array di oggetti contentenenti le informazioni del team

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO', 
        photo: 'wayne-barnett-founder-ceo.jpg'
    }, 
    {
        name: 'Angela Caroll', 
        role: 'Chief Editor', 
        photo: 'angela-caroll-chief-editor.jpg'
    }, 
    {
        name: 'Walter Gordon', 
        role: 'Office Manager', 
        photo: 'walter-gordon-office-manager.jpg', 
    }, 
    {
        name: 'Angela Lopez', 
        role: 'Social Media Manager', 
        photo: 'angela-lopez-social-media-manager.jpg'
    }, 
    {
        name: 'Scott Estrada', 
        role: 'Developer', 
        photo: 'scott-estrada-developer.jpg'
    }, 
    {
        name: 'Barbara Ramos', 
        role: 'Graphic Designer', 
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

// Bersaglio il contenitore delle cards
const cardContainerEl = document.getElementById('card-container');


// PER OGNI MEMBRO DEL TEAM

console.log(`======================Team Members======================`);

// VERSIONE CON SOLO IL FOR
// for(let i=0; i<teamMembers.length; i++){
//     // - stampo in console le sue informazioni
//     // console.log(`Name: ${teamMembers[i].name}`);
//     // console.log(`Role: ${teamMembers[i].role}`);
//     // console.log(`Photo: ${teamMembers[i].photo}`);
//     // console.log(`________________________________________________________`);
    
//     // // - BONUS: stampo nel DOM le sue informazioni in contenitori che stilizzerò dal CSS
//     // // - Creo n <div> quanti sono gli elementi dell'array
//     // createCard(cardContainerEl, teamMembers[i].name, teamMembers[i].role, teamMembers[i].photo);

// }


// VERSIONE CON IL FOR IN 
for (let i=0; i<teamMembers.length; i++){
    for(let key in teamMembers[i]){
        console.log(`${key}: ${teamMembers[i][key]}`);
    }
    console.log(`________________________________________________________`);
    
    createCard(cardContainerEl, teamMembers[i].name, teamMembers[i].role, teamMembers[i].photo);
}














//*******************************************
//                FUNCTIONS                //
//*******************************************


/**
 * Crea un div con dentro un tag img, gli aggiunge una classe card e lo appende al contenitore
 * @param {HTMLElement} parent
 * @param {string} src
 */
function createCard(parent, name, role, src){
    // creo un div
    let newDivEl = document.createElement('div');

    // gli assegno una classe card
    newDivEl.classList.add('card');

    // creo un div dentro la card per le informazioni
    let newTitleEl = document.createElement('div');
    newTitleEl.classList.add('info');
    newTitleEl.innerHTML = `<h3>${name}</h3><h4>${role}</h4>`;
    
    // creo un'immagine 
    let newImgEl = document.createElement('img');
    
    // setto la src dell'immagine
    newImgEl.src = getSrc(src);
    
    // appendo l'immagine alla card
    newDivEl.append(newImgEl);
    
    // appendo le informazioni alla card
    newDivEl.append(newTitleEl);

    // appendo la card al contenitore
    parent.append(newDivEl);
}

/**
 * trasformo la stringa proprietà in un percorso src
 * @param {string} property
 * @returns {string}
 */
function getSrc(property){
    property = `./img/${property}`;
    return property;
}