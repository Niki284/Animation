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
/*
// Select the cursor element
const cursor = document.querySelector('.cursor');

// Add event listeners to track mouse movement
document.addEventListener('mousemove', (e) => {
  // Update cursor position
  gsap.to(cursor, {
    duration: 0.3,
    x: e.clientX - cursor.offsetWidth / 2,
    y: e.clientY - cursor.offsetHeight / 2,
    ease: 'power2.out',
  });
  
  // Ensure the cursor is visible
  gsap.set(cursor, { opacity: 1 });
  
  // Clear any previous animations
  if (cursor.animation) cursor.animation.kill();
  
  // Set up a delayed fade-out animation
  cursor.animation = gsap.to(cursor, {
    duration: 0.5,
    opacity: 0,
    delay: 1, // Adjust the delay before fading out
    onComplete: () => {
      cursor.style.pointerEvents = 'none'; // Disable interactions after fading out
    },
  });
});

// Add event listener to reset cursor visibility when the mouse enters the window
document.addEventListener('mouseenter', () => {
  cursor.style.pointerEvents = 'auto'; // Enable interactions
  gsap.set(cursor, { opacity: 1 });
  if (cursor.animation) cursor.animation.kill();
});
*/