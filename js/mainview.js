var divApp = document.getElementById('app');
// view

updateView();

function updateView() {
    html = `<h1> The Legends of Apex </h1>`;
    for(let i = 0; i < model.characters.length; i ++){
        html += `
        <img class="bilde" onclick="selectedCharacter(${i})"src="${model.characters[i].img}" width="225" height="300">
        `;
        
    }

    html += `
    <p class="info">Apex Legends er et teambasert Battle Royale-spill utviklet av Respawn Entertainment og publisert av Electronic Arts. I spillet er det ca. 60 spillere som blir satt opp mot hverandre på en øy og man blir delt inn i lag på tre spillere. 
    Etter spillerne har landet på øya må de samle sammen våpen og andre ressurser for å kjempe mot de andre lagene. Dette skjer samtidig som spillområdet sakte blir mindre helt til ett lag står igjen som vinnere av matchen. 
    Spillet har også såkalte «care packages» og muligheten til å gjenopplive døde lagkamerater innen en viss tidsgrense. Lagkamerater kan kommunisere gjennom en «voice chat» eller et «ping-system», som vil si at spilleren kan markere områder på kartet, 
    ressurser og fiender og de andre på laget kan se hva som markeres. Spillet har i dag 17 karakterer man kan velge i mellom og ulike modes man kan spille. 
    Du kan velge mellom gamemodes som Trios, Duos, Ranked  og Arena, i tillegg har man mulighet til å spille i Firing Range der man kan teste ut våpen og prøve ut de ulike karakterene.</p>
    <br>
    <button class="knapp" onclick="squadView()">Select your squad</button>
    `;

    divApp.innerHTML = html;
}

function selectedCharacter(idOnOneCharacter){
    let firstInARow = model.characters.length % 5;
    html = `
    <div class="${firstInARow ? 'first': '' }"> ${model.characters[idOnOneCharacter].name}<br><br>
    <img src="${model.characters[idOnOneCharacter].img}" alt="Lifeline" width="225" height="300"><br>
    ${model.characters[idOnOneCharacter].role} <br>
    ${model.characters[idOnOneCharacter].class} <br><br>
    <p class="ability">Abilities:</p>
    ${model.characters[idOnOneCharacter].passive} <br>
    ${model.characters[idOnOneCharacter].tactical} <br>
    ${model.characters[idOnOneCharacter].ultimate} <br>
    </div>
    <br>
    <br>
    <button id="tilbakeKnapp" onclick="updateView()">Back</button>
    `;

    divApp.innerHTML = html;
}


