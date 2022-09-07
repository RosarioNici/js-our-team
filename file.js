/*,
esercizio di oggi: Our Team
nome repo:js-our-team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede*/

/*Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg*/


const ourTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
]


for (let i = 0; i < ourTeam.length; i++) {

    const team = ourTeam[i]
    const cardOnDom = document.getElementById('cards')
    cardOnDom.innerHTML += `<div class="card-team mx-2 my-1">
                                <div class="container-fluid">
                                    <img class="img-fluid" src="./img/${team.img}" alt="${team.nome} picture" />
                                </div >
                                <div class="py-2 container-fluid">
                                <div><p class="fw-bold">${team.nome}</p></div>
                                <div><p class="fw-bold">${team.ruolo}</p></div>
                                </div>
                           </div>`

    console.log(cardOnDom)




}





