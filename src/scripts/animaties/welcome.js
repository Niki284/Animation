import {
    gsap
} from 'gsap';

const showWelcome = (callback) => {
    const $welcomeContainer = document.getElementById('welcome');
    const $loading = $welcomeContainer.querySelector('h3');

    const timeline = gsap.timeline({
        onComplete: () => {
            callback();
        }
    });
    timeline.fromTo(
            $loading, {
                y: 0,
                opacity: 0
            }, {
                y: -25,
                duration: 1,
                opacity: 1,
                ease: ".5 ease-in",
            })
        .to($welcomeContainer, {
            x: "100%",
            duration: 2,
            ease: ".5 ease-in"
        })
}


// oude versie 
/*
const showWelcome = (callback) => {
    const $welcomeContainer = document.getElementById('welcome');
    const $loading = $welcomeContainer.querySelector('h3');
    const timeline = gsap.timeline({
        onComplete: () => {
            callback();
        }
    });
    const containerAnimation = gsap.to($welcomeContainer, {
        x: "100%",
        duration: 3.5,
        ease: ".5 ease-in",
    })
    timeline
    .to($loading, {
        y: -25,
        duration: 1,
        onComplete: () => {
            containerAnimation
        }
    })
}
*/
export default showWelcome;