//   let tab=[];
//   function enregister () {let title =document.getElementById('title');
// let titre =document.getElementById('titre');
// let destination =document.getElementById('destination');
// let note =document.getElementById('note');
// let categorie =document.getElementById('categorie');
// let submit =document.getElementById('submit');
// let Annuler =document.getElementById('Annuler');
// let newdest={
//             title:title.value,
//             titre:titre.value,
//             destination:destination.value,
//             note:note.value,
//             categorie:categorie.value,
            
            
            
//           }
//           tab.push(newdest)
          
//         }
// 1️⃣ tableau global لتخزين الرحلات
let travels = [];

// 2️⃣ DOM elements
const container = document.getElementById("cardsContainer");
const form = document.getElementById("travelForm");
const showFormButton = document.getElementById("showFormButton");

// 3️⃣ Fonction pour afficher les voyages
function renderTravels() {
  container.innerHTML = ""; // نفرغ الكونتينر قبل ما نعرضو كلشي

  travels.forEach((travel, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${travel.title}</h3>
      <p>📍 ${travel.destination}</p>
      <p>📅 ${travel.date}</p>
      <p>⭐ ${travel.note}/5</p>
      <p>Catégorie: ${travel.category}</p>
      <img src="${travel.image}" width="200"><br>
    `;

    container.appendChild(card);
  });
}

// 4️⃣ Button pour montrer le formulaire
showFormButton.addEventListener("click", function() {
  form.style.display = "block"; // يظهر الفورم
  this.style.display = "none";   // الزر يختفي
});

// 5️⃣ Ajouter un voyage
form.addEventListener("submit", function(e){
  e.preventDefault(); // نحبسو reload

  // 6️⃣ ناخدو القيم من الفورم
  const travel = {
    title: document.getElementById("title").value,
    destination: document.getElementById("destination").value,
    date: document.getElementById("date").value,
    note: document.getElementById("note").value,
    image: document.getElementById("image").value,
    category: document.getElementById("category").value
  };

  // 7️⃣ نضيفو الرحلة للtableau
  travels.push(travel);

  // 8️⃣ نعرضو الرحلات المضافة
  renderTravels();

  // 9️⃣ نفرغو الفورم بعد الإضافة
  this.reset();
});
