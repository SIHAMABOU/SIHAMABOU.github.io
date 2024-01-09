const slides = [
    {
        imageUrl: "images/3.jpg",
        tagLine: "<span>Professional Cleaning</span>SO FRESH & SO CLEAN... <br> WE PROMISE! ",
    },
    {
        imageUrl: "images/2.jpg",
        tagLine: "<span>Professional Cleaning</span>SO FRESH & SO CLEAN... <br> WE PROMISE! ",
    },
    {
        imageUrl: "images/4.PNG",
        tagLine: "<span>Professional Cleaning</span> SO FRESH & SO CLEAN... <br> WE PROMISE! ",
    },
   
];

/*=============== VARIABLES ===============*/
//#region

	/* Sélectionne l'élément du DOM avec la classe "dots" et le stocke dans la variable dotsContainer */
	const dotsContainer = document.querySelector(".dots");

	/* Sélectionne les éléments du DOM avec les classes "arrow_right" et "arrow_left" 
	et les stocke dans les variables arrowRight et arrowLeft */
	const arrowRight = document.querySelector(".arrow_right");
	const arrowLeft = document.querySelector(".arrow_left");

	/* Sélectionne les éléments du DOM ayant les classes 
	"banner-img" et "#banner p" et les stocke dans les variables img et tagLine */
	const img = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");

	/* Initialise l'index à 0, représentant la position actuelle dans le carrousel. */
	let index = 0;

//#endregion

/*=============== BULLET POINTS ===============*/
	/* Fonction pour créer un bullet point dans le carrousel */
	function createDot(i) {

		/* Crée un élément div dans le DOM et lui ajoute la classe "dot" */
		const dot = document.createElement("div");
		dot.classList.add("dot");

		/* Ajoute le bullet point au conteneur de points (dotsContainer) */
		dotsContainer.appendChild(dot);

		/* Ajoute un Event Listener au clic sur le bullet point, 
		appelant la fonction updateCarousel avec l'index du bullet point en argument */
		dot.addEventListener("click", () => {
			updateCarousel(i);
		});

		/* CONDITION : si le bullet point créé correspond à l'index actuel du carrousel, 
		ajoute la classe "dot_selected" afin qui soit en surbrillance. */
		if (i === index) {
			dot.classList.add("dot_selected");
		}
	}

	/* Fonction permettant d'afficher les bullet points du carrousel */
	function displayDots() {

		/* Parcours tous les slides et crée un bullet point pour chaque image */
		for (let i = 0; i < slides.length; i++) {
			createDot(i);
		}
	}

/*=============== CARROUSEL ===============*/
	/* Fonction permettant de mettre à jour le carrousel avec l'image 
	et le texte correspondant à un index donné */
	function updateCarousel(i) {
		
		/* Sélectionne tous les bullet points du carrousel */
		const selectDots = document.querySelectorAll(".dots .dot");

		/* Retire la classe "dot_selected" du point actuel */
		selectDots[index].classList.remove("dot_selected");

		/* Mise à jour de l'index actuel */
		index = i;

		/* Met à jour l'image et le texte du carrousel en fonction du nouvel index */
		img.src = slides[index].imageUrl;
		tagLine.innerHTML = slides[index].tagLine;

		/* Ajoute la classe "dot_selected" au nouveau bullet point */
		selectDots[index].classList.add("dot_selected");
	}

	/* Fonction permettant d'effectuer le défilement du carrousel vers la droite 
	ou la gauche dans la direction choisi */
	function slide(direction) {

		/* Sélectionne tous les points du carrousel */
		const selectDots = document.querySelectorAll(".dots .dot");

		/* Retire la classe "dot_selected" du bullet point actuel */
		selectDots[index].classList.remove("dot_selected");

		/*  Met à jour l'index en fonction de la direction */
		if (direction === "right") {
			index = (index + 1) % slides.length;
		} else {
			index = (index - 1 + slides.length) % slides.length;
		}

		/* Met à jour l'image et le texte du carrousel en fonction du nouvel index. */
		img.src = slides[index].imageUrl;
		tagLine.innerHTML = slides[index].tagLine;

		/* Ajoute la classe "dot_selected" au nouveau bullet point */
		selectDots[index].classList.add("dot_selected");
	}

/*=============== INTERACTION AVEC LES FLÈCHES & AUTOMATISATION ===============*/
	function slideRight() {
		slide("right");
	}

	function slideLeft() {
		slide("left");
	}

	/* Fonction permettant le défilement automatique du carrousel */
  function autoSlide() {
    autoSlideInterval = setInterval(() => {
    /* setInterval permet d'appeler la fonction slideRight toutes les X millisecondes */
        slideRight();
    }, 2000);  /* 3000 millisecondes = 3 secondes */
  }	

	/* Ajout des Event Listeners aux flèches pour un défilement manuel */
	arrowRight.addEventListener("click", slideRight);
	arrowLeft.addEventListener("click", slideLeft);

	/* Ajoute un Event Listener pour arrêter le défilement automatique 
	lorsqu'une interaction utilisateur est détectée */
	dotsContainer.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    autoSlide();
});

/* Fonction utilisée pour précharger les images du carrousel. */
function preloadImages() {
    for (let i = 0; i < slides.length; i++) {
        const imageObj = new Image();
        imageObj.src = slides[i].imageUrl;
    }
}

/*=============== APPEL DE FONCTIONS ===============*/
  /* Démarrage du préchargement d'images */
  preloadImages();

	/* Démarrage du défilement automatique */
	autoSlide();

	/* Affichage des bullet points du carrousel */
	displayDots();


	$(".slider").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000, //2000ms = 2s;
		autoplayHoverPause: true,
	});

//Review JS Code

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
	autoplay: {
		delay: 2000, // Le délai entre les diapositives en millisecondes
		disableOnInteraction: true, // Désactive l'autoplay après une interaction utilisateur (par défaut à true)
	  },
  });




  document.addEventListener('DOMContentLoaded', function () {
	const counters = document.querySelectorAll('.counter-item-number span');

	counters.forEach(counter => {
		const target = parseInt(counter.getAttribute('data-to'));
		const speed = parseInt(counter.getAttribute('data-speed'));

		const updateCounter = () => {
			const value = parseInt(counter.innerText);
			const increment = target / (speed / 50);

			if (value < target) {
				counter.innerText = Math.ceil(value + increment);
				setTimeout(updateCounter, 100);
			} else {
				counter.innerText = target;
			}
		};

		updateCounter();
	});
});

