// =========================================================================
// PREMIUM INTERACTIONS & ANIMATIONS
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Hover Effect setup for dynamic glow on highlight link
    const handleMouseGlow = () => {
        const highlightLinks = document.querySelectorAll('.highlight-link');
        
        highlightLinks.forEach(link => {
            link.addEventListener('mousemove', (e) => {
                const rect = link.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                link.style.setProperty('--mouse-x', `${x}px`);
                link.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    };

    // 2. Entrance Animations (GSAP)
    const initEntranceAnimations = () => {
        // Only run if GSAP is loaded
        if (typeof gsap === 'undefined') return;

        // Create a primary timeline
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

        // A. Background subtle fade-in
        tl.fromTo('.bg-glow', 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 0.6, scale: 1, duration: 2, ease: 'power2.out' }
        );

        // B. Avatar & Ring Entry
        tl.fromTo('.avatar-placeholder', 
            { y: 30, opacity: 0, scale: 0.8 },
            { y: 0, opacity: 1, scale: 1, duration: 1 }, 
            "-=1.5"
        );
        
        tl.fromTo('.avatar-ring',
            { opacity: 0, scale: 0.5 },
            { opacity: 0.5, scale: 1, duration: 1.5, ease: 'power2.out' },
            "-=1.2"
        );

        // C. Text elements (Logo, Subtitle, Description)
        tl.fromTo(['.logo-text', '.subtitle', '.description'],
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15 },
            "-=1.0"
        );

        // D. Badges cascading
        tl.fromTo('.badge',
            { y: 15, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, stagger: 0.08, ease: 'back.out(1.5)' },
            "-=0.6"
        );

        // E. Link Cards cascading upwards
        tl.fromTo('.link-card',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: 'power4.out' },
            "-=0.4"
        );

        // F. Footer slight fade
        tl.fromTo('.footer',
            { opacity: 0 },
            { opacity: 0.6, duration: 1 },
            "-=0.2"
        );
    };

    // 3. Floating animation for the background glow
    const initBackgroundParallax = () => {
        if (typeof gsap === 'undefined') return;
        
        gsap.to('.bg-glow', {
            y: 50,
            x: -20,
            duration: 8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
    };

    // 4. Initialize Particles.js Effect
    const initParticles = () => {
        if (typeof particlesJS === 'undefined') return;

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 40,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#8b5cf6"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#8b5cf6",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    };

    // Initialize all modular functions
    handleMouseGlow();
    initEntranceAnimations();
    initBackgroundParallax();
    initParticles();
});
