export function homeGsap() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: 'top 80%',
            end: 'bottom bottom',
            toggleActions: 'play none none none'
        } 
    });

    tl.from('.container', {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: 'sine.out'
    })
}