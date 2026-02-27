export function changeBtn() {
    const btn = document.getElementById('change');
    const main = document.querySelector('#main');
    const particles = document.getElementById('particles-js');
    const input = document.getElementById('nome');

    btn.addEventListener("click", () => {

        main.classList.toggle('light');
        particles.classList.toggle('light');
        input.classList.toggle('light');

        particlesJS("particles-js", {
            particles: {
                number: { value: 120 },
                color: { value: "#28c941" },
                shape: { type: "circle" },
                opacity: { value: 0.8 },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#000000",
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 1
                        }
                    }
                }
            },
            retina_detect: true
        });
    });
};
