const modal = document.querySelector(".modal-container");
const openModal = document.getElementById("openBtn");
const closeModal = document.querySelector(".closeBtn");


//Wenn Benutzer klickt auf dem Knopf, öfnet sich das Module
openModal.addEventListener('click' , ()=> {
 modal.style.display = 'block';
})

//Wenn Benutzer klickt auf dem Knopf, schließt sich das Module
closeModal.addEventListener('click' , ()=> {
 modal.style.display = "none";
})

//Wenn Benutzer klickt außerhalb des Moduls, schließt sich das Module
window.addEventListener('click' , (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} );
