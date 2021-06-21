// controller

function leggTilLegend(){
    let html = '';
  for(let i = 0; i < model.characters.length; i++){
      html += `<h1 onclick="selectThisCharacterToSquad(${model.characters[i].id})">${model.characters[i].name}</h1>`;
  }
      test = html 
      squadView();
}  

function selectThisCharacterToSquad(idOnSingleCharacter){
    if(model.team.length <= 3){
      model.team.push({id: idOnSingleCharacter})
      test= ''
    }
      
  test= '';
      squadView(); 
}

/* function fjerneLegend(index) {
model.team.slice(index, 1)
}

 */


