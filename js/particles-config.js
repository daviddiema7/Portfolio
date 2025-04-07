tsParticles.load("tsparticles", {
    fullScreen: { enable: false }, // Gardé à false car on contrôle la taille avec CSS (absolute inset-0)
    background: {
      // La couleur de fond est déjà gérée par le body (bg-gray-900),
      // on peut la rendre transparente ici ou la laisser pour fallback.
      // color: { value: "#0f172a" } // Peut être commenté si bg-gray-900 suffit
    },
    particles: {
      number: { value: 300}, // Légèrement réduit pour la performance
      color: { value: "#38bdf8" }, // Bleu clair Tailwind
      shape: { type: "circle" },
      opacity: {
        value: 0.4, // Légèrement réduit
        random: true, // Ajoute un peu de variation
      },
      size: {
        value: { min: 1, max: 3 }, // Taille variable
        random: true,
      },
      move: {
        enable: true,
        speed: 0.8, // Légèrement réduit
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      links: {
        enable: true,
        distance: 120, // Légèrement augmenté
        color: "#38bdf8",
        opacity: 0.15, // Légèrement réduit
        width: 1
      }
    },
    interactivity: {
      detect_on: "canvas", // Important
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // repulse, grab, bubble
        },
        onclick: {
          enable: true,
          mode: "push" // push, remove
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: { opacity: 0.3 }
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 1,
          opacity: 0.8
        },
        repulse: {
          distance: 100, // Distance de répulsion
          duration: 0.4
        },
        push: { particles_nb: 4 }, // Nombre de particules ajoutées au clic
        remove: { particles_nb: 2 }
      }
    },
    detectRetina: true // Garde une bonne qualité sur écrans haute résolution
  });