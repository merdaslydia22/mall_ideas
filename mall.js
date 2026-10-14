const explore = document.getElementById("explore");
const stores = document.getElementById("stores");
explore.addEventListener("click" , function(){
    stores.scrollIntoView ({
        behavior:"smooth" 
      });

});

const searchInput= document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cards = document.querySelectorAll(".card");
searchButton.addEventListener("click" , function(){
    let searchText = searchInput.value.toLowerCase().trim();
    cards.forEach (card=> {
      let  storeName= card.querySelector("h2").innerText.toLowerCase();
      if(storeName.includes(searchText)){
        card.style.display="block";
      }
       else {
        card.style.display="none";
       }


    });


}); 

