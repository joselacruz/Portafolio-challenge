var mediaQuery = window.matchMedia("(min-width:700px)");
const projectsCards = Array.from(document.querySelectorAll(
    ".projects-card-container .projects-card",
));
const containerBtnProjects = document.querySelector(".projects-head-buttons");
//objecto con los id de Cada card Projects pintados en html
const projects = {
    "001": {
        javascript: false,
        react: true,
        responsive: true,
    },
    "002": {
        javascript: true,
        react: true,
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
        react: true,
        responsive: true,
    },
    "006": {
        javascript: true,
        react: true,
        responsive: true,
    },
    "007": {
        javascript: false,
        react: false,
        responsive: true,
    },
};
const paginationContainer = document.querySelector(".projects-card-pagination");



let prevButton = null; //captura el botón previamente seleccionado/clic para la quitarle la clase active
containerBtnProjects.addEventListener("click", (e) => { //detector de eventos de click a todos los bottones del filtrado de los Projects .
    const isButton = e.target.nodeName === "BUTTON"; //Comprueba si el elemento en el que se hizo clic es un botón

    if (!isButton) {
        return;
        
    }

 e.target.classList.add("active");
    matches(e.target.id); // llamado a la funcion matches para filtar por categoria segun el id que es igual a la propiedad del objectos projectcards ej("javascript o X")

    if (prevButton !== null) {
      

     prevButton.classList.remove("active"); // Remove .active CSS Class
     event.preventDefault(matches);
        
    }

prevButton = e.target;  

    
});



//itera sobre todas las card Projects pintadas en html y verifica si su id es el mismo contenido en el objeto projects y si la propiedad javascript o X propiedad deseada es true

function matches(type) {
    const projectsKeys = [];
    Object.entries(projects).forEach(([key, tags]) => {
        if (tags[type]) {
            projectsKeys.push(key);
        }

    });

    console.log(projectsKeys, "prject keys"); // ["001", "002"]

    projectsCards.map((card) => {
        if (projectsKeys.includes(card.id)) {
            card.classList.remove("hidden");


        } else {
            // Si no existe entonces debemos ocultarlo :)
            card.classList.add("hidden");
           
 
            
        }
  
    });
}


let thisPage;
let limit = 6;

function loadItem() {
if(mediaQuery.matches) {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    projectsCards.forEach((item, index) => {

    if (index >= beginGet && index <= endGet) {
        item.style.display = "";
        
    } else {
        item.style.display = "none";
    }
    });
}

}





let allPages = Math.ceil(projectsCards.length / 6) ;
function pagination(allPages, pages) {

    let li = "";
    let beforePages = pages - 1;
    let afterPages = pages + 1;
    let divActive;
    if (pages > 1) {
        li += `<div class="button-pagination button__navigator" onclick= "pagination(allPages, ${pages - 1
            })"><span class="material-icons">chevron_left</span></div>`;
    }

    for (let pagesLegth = beforePages; pagesLegth <= afterPages; pagesLegth++) {
        
        if (pagesLegth > allPages) {
            //upa
            continue;
        }
        if (pagesLegth == 0) {
            pagesLegth = pagesLegth + 1;
            
        }
        if (pages == pagesLegth) {
            divActive = "active";
            console.log(pagesLegth);
        } else {
            divActive = " ";
        }
        li += `<div class="button-pagination button__number ${divActive}" onclick= "pagination(allPages, ${pagesLegth})">${pagesLegth}</div>`;
    }
    if (pages < allPages) {
        li += `<div class="button-pagination button__navigator" onclick= "pagination(allPages, ${pages + 1
            })">
        <span class="material-icons">chevron_right</span>
    </div>`;
    }

    paginationContainer.innerHTML = li;
    thisPage = pages;
    loadItem();
}

if(mediaQuery.matches) {
    pagination(allPages, 1);
}
