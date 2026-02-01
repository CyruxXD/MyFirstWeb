function toggletSidebar(){
    document.querySelector('.barraAn')
        .classList.toggle('closed')
}
// scrip para realentizar el video que no funciono

// const video = document.getElementById("fondo");
//     video.playbackRate = 0.25;

// const revelacion = document.querySelectorAll("animacionBajada");

// function revealOnScroll(){
//     const alturaDeVentana = window.innerHeight;
//     const puntoDeRevelacion = 100;

//     revelacion.forEach(selection => {
//         const selectionrTop = selection.getBoundingClientRect().top;

//         if(selectionrTop < alturaDeVentana - puntoDeRevelacion){
//             selection.classList.add("active");
//         }
//     });
// }


const revelacion = document.querySelectorAll(".animacionBajada");

function revealOnScroll() {
    const alturaDeVentana = window.innerHeight;
    const puntoDeRevelacion = 100;

    revelacion.forEach(seccion => {
        const seccionTop = seccion.getBoundingClientRect().top;

        if (seccionTop < alturaDeVentana - puntoDeRevelacion) {
            seccion.classList.add("active");
        }else{
            seccion.classList.remove("active")
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
