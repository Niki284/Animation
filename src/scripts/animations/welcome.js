import { gsap } from 'gsap';

const showWelcome = (callback) => {
    const $welcomeContainer = document.getElementById('welcome');
    const $loading = $welcomeContainer.querySelector('span');

    const timeline = gsap.timeline({
        onComplete: () => {
            callback();
        }
    });
    const containerAnimation = gsap.to($welcomeContainer, {
        x: "100%",
        duration: 1.5,
        ease: ".5 ease-in",
    })
    timeline
    .to($loading, {
        y: -25,
        onComplete: () => {
            containerAnimation
        }
    })
    
   
}

export default showWelcome;