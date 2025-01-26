import { gsap } from 'gsap';
import {Flip } from 'gsap/Flip';

 gsap.registerPlugin(Flip);
 const testScroll = () => {
   
    const navbarContainer = document.querySelector('[data-animation="containerS"]');
    const heroContainer = document.querySelector(".hero__logo-container");
    const logo = document.querySelector('#scroll--lottie');
    
    const animate = (opacity, effect) => {
      gsap.to(".hero__subtitle", {
        opacity: opacity,
        duration: 0.1
      });
      const state = Flip.getState('#scroll--lottie');
      effect();
      Flip.from(state, {
        ease: "power4.out",
        scale: true,
        yoyo: true
      });
    };
    
    const setLogoInNavBar = () => {
      animate(0, () => navbarContainer.appendChild(logo));
    };
    
    const setLogoInHero = () => {
      animate(1, () => heroContainer.appendChild(logo));
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLogoInNavBar();
        } else {
          setLogoInHero();
        }
      });
    });
    
   // observer.observe(document.querySelector(".projects"));
}

export default testScroll;