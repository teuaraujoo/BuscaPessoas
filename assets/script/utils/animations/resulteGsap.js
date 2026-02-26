export function resultGsap() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".resultado",
            start: 'top 80%',
            end: 'bottom bottom',
            toggleActions: 'play none none none'
        } 
    });

    tl.from('.card', {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: 'sine.out'
    })
}