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
    - stampo in console le sue informazioni
    - BONUS: stampo nel DOM le sue informazioni in contenitori che stilizzerò dal CSS
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


// PER OGNI MEMBRO DEL TEAM

console.log(`======================Team Members======================`);

for(let i=0; i<teamMembers.length; i++){
    // - stampo in console le sue informazioni
    console.log(`Name: ${teamMembers[i].name}`);
    console.log(`Role: ${teamMembers[i].role}`);
    console.log(`Photo: ${teamMembers[i].photo}`);
    console.log(`________________________________________________________`);
    
}