import {
  gsap
} from "gsap";
export const cursorBol = () => {
  let cursor = document.querySelector('.cursor');
  let cursorScale = document.querySelectorAll('.cursor-scale');
  let mouseX = 0;
  let mouseY = 0;

  gsap.to({}, 0.020, {
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        }
      })
    }
  });

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  })
  
  cursorScale.forEach(link => {
  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
  });

  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
  });
})
}

