
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




const scaleElements = document.querySelectorAll('.scale');
scaleElements.forEach((el) => scaleObserver.observe(el));

