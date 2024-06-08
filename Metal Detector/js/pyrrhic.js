
//Intersection observer for å se når elementer krysser inn i viewport

const fadeObserver = new IntersectionObserver((entries) => {
  //Funkjon for å legge til og fjerne klasse fra alle elementene observert
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
})

//Hente elementer fra css med hidden klassen
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => fadeObserver.observe(el));




//Samme funksjoner, men brukt for skalerings effekt

const scaleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('down');
    } else {
      entry.target.classList.remove('down');
    }
  })
})

const scaleElements = document.querySelectorAll('.scale');
scaleElements.forEach((el) => scaleObserver.observe(el));



//Header bakgrunnsanimering
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('opacity');
    header.classList.remove('opacity');
  }
});



//Meny event listener
document.addEventListener('DOMContentLoaded', (event) => {
  const dropdownButton = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownButton.addEventListener('click', function () {
    // Vise og skjule innhold
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
});

//Nattmodus eleementer
const blur = document.querySelector(".blur");
const menu = document.querySelector(".dropdown-content");

const darkBtn = document.querySelector(".darkmode");
const darkIcon = document.querySelector('.material-symbols-outlined');

//Nattmodus eventlistener for å gjøre ting mer leselig om nødvendig

darkBtn.addEventListener("click", (e) => {

  if (!blur.style.backgroundColor) {
    menu.style.backgroundColor = "black";
    menu.style.border = "solid white 0.3px";
    blur.style.backgroundColor = "black";
    darkIcon.innerHTML = "light_mode";
  } else {
    blur.style.removeProperty("background-color")
    menu.style.backgroundColor = "transparent";
    menu.style.border = "none";

    darkIcon.innerHTML = "dark_mode";
  }

})
