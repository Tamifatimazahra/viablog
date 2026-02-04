let tab = [];

 const form  = document.querySelector(".form")
 console.log(form)

 form.addEventListener('submit' , enregister);

function enregister(e){
    e.preventDefault();
}



function enregister(e) {
    e.preventDefault()
    let titre = document.getElementById('Titre').value;
    let destination = document.getElementById('destination').value;
    let note = document.getElementById('note').value;
    let categorie = document.getElementById('catego').value;
    let submit = document.getElementById('submit');
    let Annuler = document.getElementById('Annuler');
    let image = document.getElementById('img').value;

let newdest = {
  titre,
  destination,
  note,
  categorie,
  image
};
tab.push(newdest);
afficherVoyage();

   let carhtml=` <div class=" flex flex-col justify-center items-center  ">
        <div class="w-80 h-40  flex  justify-center items-center rounded-t-lg lg:w-[100%]">  lg:w-[80%]><img
                    class="w-80 h-40 bg-green-500 flex  justify-center items-center rounded-t-lg lg:w-[100%] "
                    src=${image} alt=""></a></div>
    </div>

    <div class="w-80 h-20 bg-stone-100 flex ml-9 rounded-b-lg justify-center items-center lg:flex lg:justify-between lg:items-center lg:m-auto lg:w-[80%]">
        <div class=" flex   w-[90%] justify-between items-center lg:justify-between lg:gap-12">

            <div class="text-center lg:text-left ">
                <p  id ="river" class="font-semibold ">${titre} </p>
                <p id ="by" class= "font-light text-xs"> ${categorie}</p>
            </div>
            <div class="flex  gap-4 ">
                <div  class="gap-2 flex "><img src="pointeur-de-localisation.png" alt="" class="w-4 h-4">
                    <p id ="localisation"  class="text-xs"> ${destination}</p>
                </div>
                <div class="gap-2 flex"><img class="w-4 h-4" src="time-and-date.png" alt="">
                    <p id ="time" class="text-xs">${note}</p>
                </div>
                <div  id="oiel" class="gap-2 flex"><img class="w-4 h-4" src="oeil.png" alt="">
                    <p class="text-xs"> </p>
                </div>
            </div>



        </div>

    </div>
`;
 container.innerHTML += carhtml;
 }


