"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

// Adds the hidden class so the windows close when clicking the X
btnCloseModal.addEventListener("click", closeModal);

// Adds the hidden class so the windows close when clicking the overlay
overlay.addEventListener("click", closeModal);

// Adds event listener to keyboard key press
document.addEventListener('keydown', function(e){
  // console.log(e.key);

  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal(); 
  }
});