let menuVisible = false;
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}



function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("Wordpress");
        habilidades[5].classList.add("woo");
        habilidades[6].classList.add("Wordpress");
        habilidades[7].classList.add("ph");
        habilidades[8].classList.add("ph");
        habilidades[9].classList.add("xd");
        habilidades[10].classList.add("xd");
        habilidades[11].classList.add("Wordpress");
        habilidades[12].classList.add("ph");
        habilidades[13].classList.add("html");
        habilidades[14].classList.add("woo");
        habilidades[15].classList.add("Wordpress");
        habilidades[16].classList.add("Wordpress");
        habilidades[17].classList.add("ph");
        habilidades[18].classList.add("ph");
        habilidades[19].classList.add("css");
        habilidades[20].classList.add("Wordpress");
        habilidades[21].classList.add("ph");
        habilidades[22].classList.add("css");
        habilidades[23].classList.add("css");




    }
}


window.onscroll = function(){
    efectoHabilidades();
}