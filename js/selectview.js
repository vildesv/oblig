//second view
let test = '';
function squadView() {
    let html = `<h1>Select your squad</h1> <br> ${test}`;
    for(let i = 0; i < model.team.length; i++){
        for(let f = 0; f < model.characters.length; f++){
            if(model.team[i].id === model.characters[f].id){
                html += `<h2 style="text-align: center;">${model.characters[f].name}</h2>`;
                
            }
        }
    }
      

    html += `
    <button class="knapper" onclick="endreLegend()">Endre legend</button><br><br>
    <button class="knapper" onclick="fjerneLegend()">Fjerne legend</button><br><br>
    <button class="knapper" onclick="leggTilLegend()">Legg til legend</button><br><br>
    <button class="knapper" onclick="updateView()">Tilbake</button>
    
    `;

    divApp.innerHTML = html;
}







  /* Forsøk:
<h2>${model.characters[f].name}</h2>


function selectedSquad(){
let html = '';
for(let i = 0; i < model.team.length; i++){
if(model.team[i].id == model.characters.filter(char => char.id)){
html += `<h2>${model.characters[i].name}</h2>`}
for(let f = 0; f < model.characters.length; f++){
if(model.team[i].id === model.characters[f].id){
    html += `<h2>${model.characters[f].name}</h2>`}         
}     
}         
model.teamView = html        
squadView();
}

if (model.characters[i].id == model.team[t].id) 
    html += `model.characters[i].name`; 
               
html += `
<button class="knapper" onclick="endreLegend()">Endre legend</button><br><br>
<button class="knapper" onclick="fjerneLegend()">Fjerne legend</button><br><br>
<button class="knapper" onclick="leggTilLegend()">Legg til legend</button><br><br>
<button class="knapper" onclick="updateView()">Tilbake</button>
`;

model.characters.length % 5; 
for(let i = 0; i < model.characters.length % 3; i ++) {
        html += `
            <div></div>
            <div></div>
            <div><img class="bilde" src="${model.characters[i].img}" width="225" height="300"></div>
        `;
    } 
    
if(model.team[i].id == model.characters.filter(char => char.id)){
html += `<h2>${model.characters[i].name}</h2>`}
    */