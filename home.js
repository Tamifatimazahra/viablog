  let tab=[];
  function enregister () {
let title =document.getElementById('title').value;
let titre =document.getElementById('Titre').value;
let destination =document.getElementById('destination').value;
let note =document.getElementById('note').value;
let categorie =document.getElementById('catego').value;
let submit =document.getElementById('submit').value;
let Annuler =document.getElementById('Annuler').value;
let image =document.getElementById('image').value;
let newdest={
            title:title,
            titre:titre,
            destination:destination,
            note:note,
            categorie:categorie,
            Image:image,

            
            
          }
          tab.push(newdest)
          
        }
