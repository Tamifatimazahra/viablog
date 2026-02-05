

 const form  = document.getElementById('Destination_page');









    
    let titre = document.getElementById('Titre');
    let destination = document.getElementById('destination');
    let note = document.getElementById('note');
    let categorie = document.getElementById('catego');
    let submit = document.getElementById('submit');
    let Annuler = document.getElementById('Annuler');
    let image = document.getElementById('img');

    let tab = [];
submit.onclick =function addDATA(){
 let newdest = {
  titre_de_card : titre.value,
  destination_de_card : destination.value,
  note_de_card :note.value,
  categorie_de_card :categorie.value,
  image_de_card:image.value,
}
tab.push(newdest);
afficherVoyage();
clearData();
}

   

function afficherVoyage(){

 let array = '';
    for (let i = 0 ; i< tab.length ; i++){

        array +=` <div class=" flex flex-col justify-center items-center  ">
        <div class="w-80 h-40  flex  justify-center items-center rounded-t-lg lg:w-[100%]">  lg:w-[80%]><img
                    class="w-80 h-40 bg-green-500 flex  justify-center items-center rounded-t-lg lg:w-[100%] "
                    src=${tab[i].image} alt=""></a></div>
    </div>

    <div class="w-80 h-20 bg-stone-100 flex ml-9 rounded-b-lg justify-center items-center lg:flex lg:justify-between lg:items-center lg:m-auto lg:w-[80%]">
        <div class=" flex   w-[90%] justify-between items-center lg:justify-between lg:gap-12">

            <div class="text-center lg:text-left ">
                <p  id ="river" class="font-semibold ">${tab[i].titre} </p>
                <p id ="by" class= "font-light text-xs"> ${tab[i].categorie}</p>
            </div>
            <div class="flex  gap-4 ">
                <div  class="gap-2 flex "><img src="pointeur-de-localisation.png" alt="" class="w-4 h-4">
                    <p id ="localisation"  class="text-xs"> ${tab[i].destination}</p>
                </div>
                <div class="gap-2 flex"><img class="w-4 h-4" src="time-and-date.png" alt="">
                    <p id ="time" class="text-xs">${tab[i].note}</p>
                </div>
                <div  id="oiel" class="gap-2 flex"><img class="w-4 h-4" src="oeil.png" alt="">
                    <p class="text-xs"> </p>
                </div>
            </div>



        </div>

    </div>
`;
    }
  
   document.getElementById('countainer') = array;
 
    
}
   

function clearData(){
    titre.value = '';
    image.value = '';
    destination.value = '';
    note.value = '';
}
