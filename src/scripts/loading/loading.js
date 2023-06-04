
import { gsap } from 'gsap';

const showWelcome = (callback) => {
    const $loading = document.querySelector('.loading');

    const timeline = gsap.timeline({
        onComplete: () => {
            callback();
        }
    });

    timeline
    .to($loading, {
    x: 100,
    background: 'green',
    opacity: 0,
    duration: 1.5,
    ease: ".5 ease-in",
});
}

export default showWelcome;