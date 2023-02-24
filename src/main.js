const projectsCards = document.querySelectorAll([".projects-card-container .projects-card"])
const showProjectsJs = document.querySelector("#javascript");
const showProjectsResponsive = document.querySelector("#responsive")
const showProjectsReact = document.querySelector("#react");

//objecto con los id de Cada card Projects pintados en html
const projects = {
    "001" : {
        javascript: false,
        react:false,
        responsive: true,
    },
    "002" : {
        javascript: true,
        react:false,
        responsive: true,
    },
    "003" : {
        javascript: true,
        react:false,
        responsive: true,
    },
        "004" : {
        vue: false,
        react:false,
        responsive: true,
    },
};





//click en el boton de  js
showProjectsJs.addEventListener("click", () => {

matches(0);
})




//click en el boton de  responsive
showProjectsResponsive.addEventListener("click",() => {
    matches(2); 
} )

//click en el boton de  react
showProjectsReact.addEventListener("click", () => {
    matches(1); 
})



//itera sobre todas las card Projects pintadas en html y verifica si su id es el mismo contenido en el objeto projects y si la propiedad javascript o X propiedad deseada es true 
function matches (a) {

    Array.from(projectsCards).map(cards => {
        console.log(cards.id);
        
Object.entries(projects).forEach(([key, value]) => {
    let search = [
        value.javascript,
        value.react,
        value.responsive,
    ]
   //a es el argumento que recibie la posicion  del array  search que indicara a que posiciones del objeto projects queremos verificar si es true
    if(!search[a] && cards.id == key) {

        cards.classList.add("hidden");
   
    }
    

    //por alguna razon no me sirvio un else
    else if (search[a]  && cards.id == key){
        cards.classList.remove("hidden");
    }


   
  });


  })
}