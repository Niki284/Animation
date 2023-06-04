// import { gsap } from "gsap";

const $parent = document.querySelector('.fotos');
const $fotos = document.querySelectorAll('.foto');



$fotos.forEach((elem,i)=>{
    const divImage = elem.querySelector('.foto--L');
    const img = divImage.querySelector('img');

    const _width = divImage.clientWidth;
    const _height = divImage.clientHeight;


    elem.addEventListener("mouseenter", e => { 
        requestAnimationFrame(()=>{
            divImage.style.opacity = 1;
        });
    });
    elem.addEventListener("mouseleave", e => { 
        requestAnimationFrame(()=>{
            divImage.style.opacity = 0;
        });
    });

    elem.addEventListener("mousemove", e => { 
        requestAnimationFrame(()=>{
            let {top, left} = elem.getBoundingClientRect();
        
            divImage.style.top = `${e.y - top}px`;
            divImage.style.left = `${e.x - left}px`;

            let maxHeight = Math.min(e.y - top,top + elem.clientHeight - e.y);
            let maxWidth = Math.min(e.x - left,left + elem.clientWidth - e.x);
        
            let scale = Math.min(1,Math.min(maxHeight/_height,maxWidth/_width));

            divImage.style.opacity = scale;
            divImage.style.width = `${_width*scale}px`;
            divImage.style.height = `${_height*scale}px`;
        });
    });
});




//
// let mouseR = { x: 0, y: 0 };
// window.addEventListener("mousemove",(event)=>{
//     mouseR.x=event.clientX;
//     mouseR.y=event.clientY;

//     let cords = {
//         pageX:event.pageX,
//         pageY:event.pageY,
//     }

//     window.dispatchEvent(new CustomEvent("changePagePosition",{
//         detail : {
//             cords
//         }
//     }));
// });
// window.addEventListener("scroll",(event)=>{
//     let cords = {
//         pageX: window.pageXOffset + mouseR.x,
//         pageY: window.pageYOffset + mouseR.y,
//     }

  
//     window.dispatchEvent(new CustomEvent("changePagePosition",{
//         detail : {
//             cords
//         }
//     }));
// });


// window.addEventListener("changePagePosition",(event)=>{


//     console.log(event.detail.cords);
// })