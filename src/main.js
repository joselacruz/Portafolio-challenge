var mediaQuery = window.matchMedia("(min-width:700px)");
const projectsCards = Array.from(
  document.querySelectorAll(".projects-card-container .projects-card")
);

const containerBtnProjects = document.querySelector(".projects-head-buttons");
//objecto con los id de Cada card Projects pintados en html
const projects = {
  "001": {
    javascript: false,
    react: false,
    responsive: true,
   
  },
  "002": {
    javascript: true,
    react: false,
    responsive: true,
 
  },
  "003": {
    javascript: false,
    react: false,
    responsive: true,
  
  },
  "004": {
    javascript: true,
    react: false,
    responsive: true,

  },
  "005": {
    javascript: true,
    react: false,
    responsive: true,

  },
  "006": {
    javascript: true,
    react: false,
    responsive: true,
   
  },
  "007": {
    javascript: false,
    react: false,
    responsive: true,

  },
  "008": {
    javascript: true,
    react: true,
    responsive: true,

  },
  "009": {
    javascript: true,
    react: true,
    responsive: true,
   
  },
};

let prevButton = null; //captura el botón previamente seleccionado/clic para la quitarle la clase active
containerBtnProjects.addEventListener("click", (e) => {
  //detector de eventos de click a todos los bottones del filtrado de los Projects .
  const isButton = e.target.nodeName === "BUTTON"; //Comprueba si el elemento en el que se hizo clic es un botón

  if (!isButton) {
    return;
  }

  e.target.classList.add("active");
  
  matches(e.target.id); // llamado a la funcion matches para filtar por categoria segun el id que es igual a la propiedad del objectos projectcards ej("javascript o X")

  if (prevButton !== null) {
    prevButton.classList.remove("active"); // Remove .active CSS Class
    e.preventDefault(matches);
  }

  prevButton = e.target;
});

//itera sobre todas las card Projects pintadas en html y verifica si su id es el mismo contenido en el objeto projects y si la propiedad javascript o X propiedad deseada es true

function matches(type) {
  const projectsKeys = new Set(); // Usar un Set para almacenar claves únicas
  Object.entries(projects).forEach(([key, tags]) => {
    if (tags[type]) {
      projectsKeys.add(key);
    }
  });

  const uniqueProjectsKeys = Array.from(projectsKeys); // Convertir el Set a un array

  projectsCards.forEach((card) => {
    if (uniqueProjectsKeys.includes(card.id)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}
