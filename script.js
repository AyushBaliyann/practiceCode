// TMDB API Configuration
        const TMDB_API_KEY = '43ded7f4b677e3c4ab1c6d51c872b82a'; // Public demo key
        const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
        const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
        
        // Genre IDs mapping
        const GENRES = {
            28: 'Action',
            12: 'Adventure',
            35: 'Comedy',
            80: 'Crime',
            99: 'Documentary',
            18: 'Drama',
            10751: 'Family',
            14: 'Fantasy',
            36: 'History',
            27: 'Horror',
            10402: 'Music',
            9648: 'Mystery',
            10749: 'Romance',
            878: 'Science Fiction',
            10770: 'TV Movie',
            53: 'Thriller',
            10752: 'War',
            37: 'Western'
        };

         document.getElementById('clear-search').addEventListener('click', () => {
  document.getElementById('search-results').innerHTML = '';
  document.getElementById('search-results-section').style.display = 'none';
});
        
        // Personal recommendations
        const genreMovies = {
             action: [
    {
      id: 547016,
      title: "The Old Guard",
      year: 2020,
      rating: 6.7,
      poster: "https://tse1.mm.bing.net/th/id/OIP.4DppHjxP3DtFI-j2T3qTiQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
      overview: "A covert group of tight-knit mercenaries with an inability to die have fought to protect the world for centuries..."
    },
    {
      id: 110415,
      title: "Snowpiercer",
      year: 2013,
      rating: 7.1,
      poster: "https://www.themoviedb.org/t/p/w1280/n6UNHZoiYj81abwmG38HbNjflDx.jpg",
      overview: "In a future where a failed global-warming experiment kills off most life on the planet, a class system evolves aboard the Snowpiercer..."
    },
    {
      id: 94329,
      title: "The Raid: Redemption",
      year: 2011,
      rating: 7.6,
      poster: "https://www.themoviedb.org/t/p/w1280/xJUe2T9FqaNjsYoeAxtfZw2S80u.jpg",
      overview: "An elite SWAT team becomes trapped in a tenement run by a ruthless mobster and his army of killers..."
    },
    {
      id: 137113,
      title: "Edge of Tomorrow",
      year: 2014,
      rating: 7.9,
      poster: "https://www.themoviedb.org/t/p/w1280/5y7zihGFCzlyrL0YsxFOPkAD8BN.jpg",
      overview: "Major Bill Cage is caught in a time loop, reliving the same combat day over and over again..."
    },
    {
      id: 718930,
      title: "Bullet Train",
      year: 2022,
      rating: 7.3,
      poster: "https://www.themoviedb.org/t/p/w1280/6Inj3k6PlOafkqgAzHia8E7Iet7.jpg",
      overview: "Unlucky assassin Ladybug is determined to do his job peacefully, but colliding missions emerge on the world’s fastest train..."
    }
  ],
  
  adventure: [
    {
      id: 5915,
      title: "Into the Wild",
      year: 2007,
      rating: 8.1,
      poster: "https://www.themoviedb.org/t/p/w1280/jnLnLYP5pGDfri04gxtAqAvkHMw.jpg",
      overview: "After graduating from Emory University, top student Christopher McCandless abandons his possessions and hitch-hikes to Alaska..."
    },
    {
      id: 116745,
      title: "The Secret Life of Walter Mitty",
      year: 2013,
      rating: 7.3,
      poster: "https://www.themoviedb.org/t/p/w1280/eQie8iTi02uUZeWZkl5x3hM8TvX.jpg",
      overview: "When his job along with that of his co-worker are threatened, Walter embarks on a global journey that turns into an adventure..."
    },
    {
      id: 70667,
      title: "Kon-Tiki",
      year: 2012,
      rating: 7.2,
      poster: "https://www.themoviedb.org/t/p/w1280/dhSaxMcHTjq7el2vcqKRUIKmxhb.jpg",
      overview: "In 1947, Thor Heyerdahl and his crew set sail across the Pacific Ocean on a raft to prove ancient migration theories..."
    },
    {
      id: 228970,
      title: "Wild",
      year: 2014,
      rating: 7.1,
      poster: "https://www.themoviedb.org/t/p/w1280/ohhWI4Xwf4m4HjbQiIkyAhLekUy.jpg",
      overview: "A chronicle of one woman’s 1,100‑mile solo hike undertaken as a way to recover from a recent personal tragedy..."
    },
    {
      id: 1653,
      title: "The Motorcycle Diaries",
      year: 2004,
      rating: 7.7,
      poster: "https://www.themoviedb.org/t/p/w1280/oLDXOFG8FWfxyHcGbIDhAMoloUD.jpg",
      overview: "The dramatization of a motorcycle road trip Che Guevara went on in his youth that showed him his life's calling..."
    }
  ],
            comedy: [
    {
      id: 773,
      title: "Little Miss Sunshine",
      year: 2006,
      rating: 7.8,
      poster: "https://image.tmdb.org/t/p/w500/wKn7AJw730emlmzLSmJtzquwaeW.jpg",
      overview: "A family determined to get their young daughter into the finals of a beauty pageant take a cross‑country trip in their VW bus."
    },
    {
      id: 445571,
      title: "Game Night",
      year: 2018,
      rating: 6.9,
      poster: "https://image.tmdb.org/t/p/w500/85R8LMyn9f2Lev2YPBF8Nughrkv.jpg",
      overview: "A group of friends whose game night turns into a real‑life mystery when one of them is kidnapped."
    },
    {
      id: 36592,
      title: "Swing Girls",
      year: 2004,
      rating: 7.6,
      poster: "https://www.themoviedb.org/t/p/w1280/fzqkcLoIbqy9u5fqCAJOdOdMKfI.jpg",
      overview: "High school girls form a jazz band to avoid punishment—but find passion and friendship in music."
    },
    {
      id: 18785,
      title: "The Hangover",
      year: 2009,
      rating: 7.7,
      poster: "https://image.tmdb.org/t/p/original/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
      overview: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night."
    },
    {
      id: 290250,
      title: "The Nice Guys",
      year: 2016,
      rating: 7.4,
      poster: "https://image.tmdb.org/t/p/w500/clq4So9spa9cXk3MZy2iMdqkxP2.jpg",
      overview: "In 1970s LA, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star."
    }
  ],
  mystery: [
    {
      id: 575604,
      title: "The Call",
      year: 2020,
      rating: 7.1,
      poster: "https://image.tmdb.org/t/p/w500/oz8hvZHg7tIdGwh0ErPRhobJKPR.jpg",
      overview: "After receiving a distressing phone call, a woman uncovers a tale of betrayal, revenge—and startling parallels to her own life."
    },
    {
      id: 500,
      title: "Reservoir Dogs",
      year: 1992,
      rating: 8.1,
      poster: "https://image.tmdb.org/t/p/w500/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
      overview: "After a heist goes terribly wrong, the surviving criminals suspect one of them is a police informant."
    },
    {
      id: 77,
      title: "Memento",
      year: 2000,
      rating: 8.4,
      poster: "https://image.tmdb.org/t/p/w500/fKTPH2WvH8nHTXeBYBVhawtRqtR.jpg",
      overview: "A man with short‑term memory loss attempts to track down his wife’s murderer using tattoos and Polaroid clues."
    },
    {
      id: 1954,
      title: "The Butterfly Effect",
      year: 2004,
      rating: 7.6,
      poster: "https://image.tmdb.org/t/p/w500/ea5iv7TWMh18fOKoRGgmtcg85Gx.jpg",
      overview: "A young man discovers he can travel through time and attempts to change his dark past—but his actions have unexpected consequences."
    },
    {
      id: 2118,
      title: "L.A. Confidential",
      year: 1997,
      rating: 8.2,
      poster: "https://image.tmdb.org/t/p/w500/lWCgf5sD5FpMljjpkRhcC8pXcch.jpg",
      overview: "In 1950s Los Angeles, three police officers investigate a multiple‑murder scandal while uncovering corruption in their own department."
    }
  ],

  romance: [
    {
      id: 38,
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
      rating: 8.3,
      poster: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
      overview: "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her." 
    },
    {
      id: 4922,
      title: "The Curious Case of Benjamin Button",
      year: 2008,
      rating: 7.8,
      poster: "https://image.tmdb.org/t/p/w500/26wEWZYt6yJkwRVkjcbwJEFh9IS.jpg",
      overview: "Born under unusual circumstances, Benjamin Button ages in reverse, living a life of extraordinary events and bittersweet romance."
      // Poster and rating data from TMDB (not directly cited)
    },
    {
      id: 1280,
      title: "3-Iron",
      year: 2004,
      rating: 7.7,
      poster: "https://image.tmdb.org/t/p/w500/8ens4pTquSxN7J9EgL0NOehWwdZ.jpg",
      overview: "A drifter lives in people’s homes while they are away, doing chores in exchange for shelter. His life changes when he meets a woman in an unhappy marriage." 
    },
    {
      id: 843,
      title: "In the Mood for Love",
      year: 2000,
      rating: 8.1,
      poster: "https://image.tmdb.org/t/p/w500/8BgGbbWiLNhPtkMkN0gGTnbtvBv.jpg",
      overview: "Two neighbors in 1960s Hong Kong form an intimate bond as they suspect their spouses of infidelity."
      // Data from TMDB 
    },
    {
      id: 152601,
      title: "Her",
      year: 2013,
      rating: 8.0,
      poster: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
      overview: "A sensitive and introverted man develops an unlikely relationship with his newly released operating system that's designed to meet his every need."
      // Data from TMDB
    }
  ],

  horror: [
    {
      id: 776797,
      title: "The Sadness",
      year: 2021,
      rating: 6.4,
      poster: "https://image.tmdb.org/t/p/w500/mi5lh2brPMzuWYddyUKuCtcnjt1.jpg",
      overview: "A young couple is pushed to the limits of sanity as they attempt to be reunited amid the chaos of a pandemic outbreak. The streets erupt into violence and depravity..." 
    },
    {
      id: 17111,
      title: "Shutter",
      year: 2004,
      rating: 6.2,
      poster: "https://ayushbaliyann.github.io/CyberFlix/shutterPoster.jpg",
      overview: "A young photographer and his girlfriend discover mysterious shadows in their photos after a tragic accident." 
    },
    {
      id: 157547,
      title: "Oculus",
      year: 2013,
      rating: 6.3,
      poster: "https://ayushbaliyann.github.io/CyberFlix/oculusPoster.jpg",
      overview: "A woman tries to exonerate her brother, who was accused of murder, by proving the crime was committed by a supernatural mirror." 
    },
    {
      id: 21506,
      title: "Noroi: The Curse",
      year: 2005,
      rating: 7.1,
      poster: "https://ayushbaliyann.github.io/CyberFlix/noroiTheCursePoster.jpg",
      overview: "A documentary filmmaker investigates a series of mysterious paranormal phenomena connected to an ancient curse." 
    },
    {
      id: 27324,
      title: "Pulse",
      year: 2001,
      rating: 6.4,
      poster: "https://ayushbaliyann.github.io/CyberFlix/pulsePoster.jpg",
      overview: "Ghosts invade the world of the living through the power of technology, causing people to commit suicide." 
    }
  ],

  scifi: [
    {
      id: 63,
      title: "12 Monkeys",
      year: 1995,
      rating: 8.0,
      poster: "https://ayushbaliyann.github.io/CyberFlix/12MonkeysPoster.jpg",
      overview: "In a future devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of humanity." 
    },
    {
      id: 17431,
      title: "Moon",
      year: 2009,
      rating: 7.9,
      poster: "https://ayushbaliyann.github.io/CyberFlix/moonPoster.webp",
      overview: "A man nearing the end of his three-year stint working on a lunar base begins to question his reality." 
    },
    {
      id: 55420,
      title: "Another Earth",
      year: 2011,
      rating: 6.8,
      poster: "https://ayushbaliyann.github.io/CyberFlix/anotherEarthPoster.jpeg",
      overview: "On the night a duplicate Earth is discovered in the solar system, an ambitious young student and an accomplished composer cross paths." 
    },
    {
      id: 782,
      title: "Gattaca",
      year: 1997,
      rating: 7.8,
      poster: "https://ayushbaliyann.github.io/CyberFlix/gattacaPoster.jpeg",
      overview: "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel." 
    },
    {
      id: 1272,
      title: "Sunshine",
      year: 2007,
      rating: 7.2,
      poster: "https://ayushbaliyann.github.io/CyberFlix/sunshinePoster.jpg",
      overview: "A team of astronauts is sent to reignite the dying Sun with a nuclear fission bomb in 2057." 
    }
  ],

  drama: [
    {
      id: 73, 
      title: "American History X",
      year: 1998,
      rating: 8.5,
      poster: "https://ayushbaliyann.github.io/CyberFlix/americanHistoryXPoster.jpeg",
      overview: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did."
    },
    {
      id: 453, 
      title: "A Beautiful Mind",
      year: 2001,
      rating: 8.2,
      poster: "https://ayushbaliyann.github.io/CyberFlix/aBeautifulMindPoster.jpeg",
      overview: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish."
    },
    {
      id: 339692, 
      title: "Shot Caller",
      year: 2017,
      rating: 7.3,
      poster: "https://image.tmdb.org/t/p/w500/qLmLz2wtyYvmW8Ult3l2ngOnW8v.jpg",
      overview: "While serving time in a California prison, a newly released gangster tries to navigate keeping him and his family alive."
    },
    {
      id: 103663, 
      title: "The Hunt", 
      year: 2012,
      rating: 8.3,
      poster: "https://ayushbaliyann.github.io/CyberFlix/theHuntPoster.jpg",
      overview: "A teacher lives a lonely life, gets involved in an extramarital affair, and has his entire life turned upside plastered by false allegations."
    },
    {
      id: 23538,
      title: "A Dirty Carnival",
      year: 2006,
      rating: 7.4,
      poster: "https://ayushbaliyann.github.io/CyberFlix/aDirtyCarnivalPoster.jpg",
      overview: "A small-time gangster tries to live a normal life, but his past choices catch up with him in dangerous ways."
    }
  ],
  fantasy: [
    {
      id: 587,
      title: "Big Fish",
      year: 2003,
      rating: 8.0,
      poster: "https://ayushbaliyann.github.io/CyberFlix/bigFishPoster.jpeg",
      overview: "A son tries to learn more about his dying father by reliving stories and myths he told about his life."
    },
    {
      id: 162,
      title: "Edward Scissorhands",
      year: 1990,
      rating: 7.9,
      poster: "https://ayushbaliyann.github.io/CyberFlix/edwardScissorhandsPoster.jpg",
      overview: "An artificial man with scissors for hands is brought into a new community after living in isolation."
    },
    {
      id: 1417,
      title: "Pan's Labyrinth",
      year: 2006,
      rating: 8.2,
      poster: "https://ayushbaliyann.github.io/CyberFlix/pansLabyrinthPoster.jpg",
      overview: "In the aftermath of the Spanish Civil War, a young girl meets a mythical faun in an eerie yet captivating labyrinth."
    },
    {
      id: 2454,
      title: "Stardust",
      year: 2270,
      rating: 7.6,
      poster: "https://ayushbaliyann.github.io/CyberFlix/stardustPoster.jpg",
      overview: "In a countryside town bordering on a magical land, a young man enters for a fallen star to win promise of a future with his beloved."
    },
    {
      id: 258230,
      title: "A Monster Calls",
      year: 2016,
      rating: 7.4,
      poster: "https://ayushbaliyann.github.io/CyberFlix/aMonsterCallsPoster.jpg",
      overview: "A boy seeks the help of a tree monster to cope with his single mother's terminal illness."
    }
  ]
        };

        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            // Load genre movies (personal recommendations)
            loadGenreMovies();
            
            // Initialize animations
            initParticleBackground();
            initCursorTrail();
            initCardAnimations();
            initNavAnimations();
            initSearch();
            initModal();
            initNavLinks();
        });

        // Load movies for each genre
        function loadGenreMovies() {
            for (const genre in genreMovies) {
                const container = document.getElementById(`${genre}-movies`);
                if (container) {
                    renderMovies(genreMovies[genre], container);
                }
            }
        }

        // Render movies to a container
        function renderMovies(moviesArray, container) {
            container.innerHTML = '';
            
            moviesArray.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.dataset.movie = JSON.stringify(movie);
                
                card.innerHTML = `
                    <div class="movie-poster">
                        <img src="${movie.poster}" alt="${movie.title}">
                    </div>
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <div class="year">${movie.year}</div>
                        <div class="rating">
                            <i class="fas fa-star"></i> ${movie.rating}/10
                        </div>
                    </div>
                `;
                
                container.appendChild(card);
            });
        }

        // Particle background
              function initParticleBackground() {
    const container = document.getElementById('particles');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const particleCount = 5000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3); // RGB for each particle

    for (let i = 0; i < particleCount; i++) {
        // Position
        posArray[i * 3] = (Math.random() - 0.5) * 10;
        posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
        posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;

        // Color (RGB values from 0 to 1)
        colorArray[i * 3] = Math.random();     // R
        colorArray[i * 3 + 1] = Math.random(); // G
        colorArray[i * 3 + 2] = Math.random(); // B
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.01,
        vertexColors: true,
        opacity: 0.8,
        transparent: true,
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 5;

    let mouseX = 0, mouseY = 0;

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - window.innerWidth / 2) / 100;
        mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;

        if (mouseX !== 0 && mouseY !== 0) {
            particles.rotation.y += mouseX * 0.001;
            particles.rotation.x += mouseY * 0.001;
        }

        renderer.render(scene, camera);
    }

    animate();
}

        // Smoother cursor trail effect
        function initCursorTrail() {
            const cursor = document.getElementById('cursor-trail');
            let trail = [];
            const trailLength = 15;
            const colors = ['#05d9e8', '#ff2a6d', '#8a2be2'];
            
            // Create trail elements
            for (let i = 0; i < trailLength; i++) {
                let trailDot = document.createElement('div');
                trailDot.className = 'cursor-trail';
                trailDot.style.opacity = 0.3 - (i * 0.02);
                trailDot.style.transform = `scale(${1 - (i * 0.05)})`;
                trailDot.style.background = `radial-gradient(circle, ${colors[i % 3]} 0%, transparent 70%)`;
                document.body.appendChild(trailDot);
                trail.push(trailDot);
            }
            
            let mouseX = 0;
            let mouseY = 0;
            let posX = 0;
            let posY = 0;
            
            // Mouse move event
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            // Animation loop for cursor trail
            function animateTrail() {
                // Move the main cursor
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
                
                // Move trail elements
                for (let i = 0; i < trail.length; i++) {
                    const nextTrail = i === 0 ? cursor : trail[i - 1];
                    const nextX = parseInt(nextTrail.style.left);
                    const nextY = parseInt(nextTrail.style.top);
                    
                    // Calculate new position with easing
                    const diffX = nextX - parseInt(trail[i].style.left || 0);
                    const diffY = nextY - parseInt(trail[i].style.top || 0);
                    
                    posX = parseInt(trail[i].style.left || 0) + diffX * 0.2;
                    posY = parseInt(trail[i].style.top || 0) + diffY * 0.2;
                    
                    trail[i].style.left = posX + 'px';
                    trail[i].style.top = posY + 'px';
                    
                    // Add a slight rotation for fluid effect
                    trail[i].style.transform = `rotate(${i * 2}deg) scale(${1 - (i * 0.05)})`;
                }
                
                requestAnimationFrame(animateTrail);
            }
            
            animateTrail();
        }

        // Movie card animations
        function initCardAnimations() {
            const cards = document.querySelectorAll('.movie-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const angleY = (x - centerX) / 8;
                    const angleX = (centerY - y) / 8;
                    
                    // Tilt effect - only for this card
                    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px) scale(1.03)`;
                    
                    // Glare effect
                    const glare = document.createElement('div');
                    glare.style.position = 'absolute';
                    glare.style.top = '0';
                    glare.style.left = '0';
                    glare.style.width = '100%';
                    glare.style.height = '100%';
                    glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent)`;
                    glare.style.pointerEvents = 'none';
                    glare.style.zIndex = '1';
                    
                    // Remove previous glare
                    const oldGlare = card.querySelector('.glare');
                    if (oldGlare) oldGlare.remove();
                    
                    glare.classList.add('glare');
                    card.appendChild(glare);
                });
                
                card.addEventListener('mouseleave', () => {
                    // Reset only this card
                    card.style.transform = '';
                    const glare = card.querySelector('.glare');
                    if (glare) glare.remove();
                });
            });
        }

        // Navigation animations
        function initNavAnimations() {
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, {
                        y: -5,
                        duration: 0.3,
                        color: '#05d9e8',
                        textShadow: '0 0 10px rgba(5, 217, 232, 0.8)'
                    });
                });
                
                link.addEventListener('mouseleave', () => {
                    gsap.to(link, {
                        y: 0,
                        duration: 0.3,
                        color: '#f5f5f7',
                        textShadow: 'none'
                    });
                });
            });
        }

        // Initialize navbar links
        function initNavLinks() {
            const discoverLink = document.getElementById('discover-link');
            const genresLink = document.getElementById('genres-link');
            const homeLink = document.getElementById('home-link');
            const searchInput = document.getElementById('search-input');
            const actionSection = document.getElementById('action-section');
            
            discoverLink.addEventListener('click', (e) => {
                e.preventDefault();
                searchInput.focus();
                searchInput.scrollIntoView({ behavior: 'smooth' });
            });
            
            genresLink.addEventListener('click', (e) => {
                e.preventDefault();
                lenis.scrollTo(actionSection, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
            });
            
            homeLink.addEventListener('click', (e) => {
                e.preventDefault();
                lenis.scrollTo(0, { duration: 1.5 });
            });
        }

        // Search functionality
        function initSearch() {
            const searchBox = document.getElementById('search-box');
            const searchInput = document.getElementById('search-input');
            const searchBtn = document.getElementById('search-btn');
            const suggestionsBox = document.getElementById('suggestions-box');
            const searchResultsSection = document.getElementById('search-results-section');
            const searchResultsContainer = document.getElementById('search-results');
            const loader = document.getElementById('loader');
            
            // Focus effect
            searchInput.addEventListener('focus', () => {
                searchBox.classList.add('focused');
                gsap.to(searchBox, {
                    duration: 0.5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(138, 43, 226, 0.8)"
                });
            });
            
            searchInput.addEventListener('blur', () => {
                setTimeout(() => {
                    searchBox.classList.remove('focused');
                    suggestionsBox.style.display = 'none';
                    gsap.to(searchBox, {
                        duration: 0.5,
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(138, 43, 226, 0.5)"
                    });
                }, 200);
            });
            
            // Auto-suggestions as user types
            searchInput.addEventListener('input', async (e) => {
                const query = e.target.value.trim();
                
                if (query.length < 2) {
                    suggestionsBox.style.display = 'none';
                    return;
                }
                
                try {
                    const response = await fetch(
                        `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
                    );
                    
                    if (!response.ok) {
                        throw new Error('Failed to fetch suggestions');
                    }
                    
                    const data = await response.json();
                    showSuggestions(data.results);
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                    suggestionsBox.style.display = 'none';
                }
            });
            
            // Search button click
            searchBtn.addEventListener('click', () => {
                const query = searchInput.value.trim();
                if (query) {
                    performSearch(query);
                }
            });
            
            // Handle Enter key
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const query = searchInput.value.trim();
                    if (query) {
                        performSearch(query);
                    }
                }
            });
            
            // Perform search using TMDB API
            async function performSearch(query) {
                if (!query) return;
                
                // Hide suggestions
                suggestionsBox.style.display = 'none';
                
                // Show loading
                loader.style.display = 'block';
                searchResultsContainer.innerHTML = '';
                searchResultsSection.style.display = 'block';
                
                try {
                    const response = await fetch(
                        `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
                    );
                    
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    
                    const data = await response.json();
                    
                    // Hide loader
                    loader.style.display = 'none';
                    
                    if (data.results.length === 0) {
                        searchResultsContainer.innerHTML = '<p class="no-results">No movies found. Try another search.</p>';
                        return;
                    }
                    
                    // Format results for our UI
                    const movies = data.results.map(movie => ({
                        id: movie.id,
                        title: movie.title,
                        year: movie.release_date ? movie.release_date.substring(0, 4) : 'N/A',
                        rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
                        poster: movie.poster_path ? `${TMDB_IMAGE_BASE}${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Poster',
                        overview: movie.overview || 'No description available.'
                    }));
                    
                    // Render search results
                    renderMovies(movies, searchResultsContainer);
                    
                    // Scroll to results
                    lenis.scrollTo(searchResultsSection, { duration: 1.5 });
                    
                    // Show notification
                    showNotification(`Found ${movies.length} results for "${query}"`);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                    loader.style.display = 'none';
                    searchResultsContainer.innerHTML = '<p class="error">Failed to load results. Please try again later.</p>';
                }
            }
            
            // Show suggestions in dropdown
            function showSuggestions(suggestions) {
                const suggestionsBox = document.getElementById('suggestions-box');
                if (!suggestions || suggestions.length === 0) {
                    suggestionsBox.style.display = 'none';
                    return;
                }
                
                suggestionsBox.innerHTML = '';
                suggestions.slice(0, 5).forEach(movie => {
                    const item = document.createElement('div');
                    item.className = 'suggestion-item';
                    item.dataset.id = movie.id;
                    
                    const poster = movie.poster_path 
                        ? `${TMDB_IMAGE_BASE}${movie.poster_path}`
                        : 'https://via.placeholder.com/40x60?text=No+Img';
                    
                    item.innerHTML = `
                        <img src="${poster}" alt="${movie.title}">
                        <div class="info">
                            <div class="title">${movie.title}</div>
                            <div class="year">${movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</div>
                        </div>
                    `;
                    item.addEventListener('click', () => {
                        document.getElementById('search-input').value = movie.title;
                        suggestionsBox.style.display = 'none';
                        performSearch(movie.title);
                    });
                    suggestionsBox.appendChild(item);
                });
                
                suggestionsBox.style.display = 'block';
            }
        }
        
        // Modal functionality
        function initModal() {
            const modalOverlay = document.getElementById('modal-overlay');
            const closeModal = document.getElementById('close-modal');
            
            // Use event delegation for movie card clicks
            document.addEventListener('click', function(e) {
                // Check if clicked element is a movie card or inside one
                let card = e.target.closest('.movie-card');
                if (card) {
                    const movieData = JSON.parse(card.dataset.movie);
                    openMovieModal(movieData);
                }
            });
            
            // Close modal when clicking on close button
            closeModal.addEventListener('click', () => {
                closeMovieModal();
            });
            
            // Close modal when clicking outside
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeMovieModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                    closeMovieModal();
                }
            });
        }
        
        // Open movie modal
        async function openMovieModal(movie) {
            const modalOverlay = document.getElementById('modal-overlay');
            const modalContent = document.getElementById('modal-content');
            
            // Show loading in modal
            modalContent.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 400px;">
                    <div class="loader"></div>
                </div>
            `;
            
            // Show modal immediately
            document.body.classList.add('modal-open');
            modalOverlay.classList.add('active');
            
            try {
                // Fetch detailed movie information from TMDB
                const response = await fetch(
                    `${TMDB_BASE_URL}/movie/${movie.id}?api_key=${TMDB_API_KEY}`
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                
                const movieDetails = await response.json();
                
                // Format runtime
                const runtime = movieDetails.runtime 
                    ? `${Math.floor(movieDetails.runtime / 60)}h ${movieDetails.runtime % 60}m`
                    : 'N/A';
                
                // Format genres
                const genres = movieDetails.genres.map(genre => genre.name);
                
                // Create modal content
                modalContent.innerHTML = `
                    <div class="modal-poster">
                        <img src="${movieDetails.poster_path ? `${TMDB_IMAGE_BASE}${movieDetails.poster_path}` : movie.poster}" alt="${movie.title}">
                    </div>
                    <div class="modal-info">
                        <h2>${movie.title}</h2>
                        <div class="year">${movie.year}</div>
                        
                        <div class="modal-meta">
                            <div class="meta-item">
                                <div class="meta-label">Rating</div>
                                <div class="meta-value">${movie.rating}/10</div>
                            </div>
                            <div class="meta-item">
                                <div class="meta-label">Duration</div>
                                <div class="meta-value">${runtime}</div>
                            </div>
                        </div>
                        
                        <div class="modal-genre">
                            ${genres.map(genre => `<span>${genre}</span>`).join('')}
                        </div>
                        
                        <div class="modal-description">
                            <p>${movie.overview || 'No description available.'}</p>
                        </div>
                        
                        <div class="modal-actions">
                            <button class="modal-btn watchlist-btn">
                                <i class="fas fa-plus"></i> Add to Watchlist
                            </button>
                        </div>
                    </div>
                `;
                
                // Add animation to buttons
                const buttons = document.querySelectorAll('.modal-btn');
                buttons.forEach(btn => {
                    btn.addEventListener('mouseenter', () => {
                        gsap.to(btn, { scale: 1.05, duration: 0.3 });
                    });
                    
                    btn.addEventListener('mouseleave', () => {
                        gsap.to(btn, { scale: 1, duration: 0.3 });
                    });
                });
            } catch (error) {
                console.error('Error fetching movie details:', error);
                modalContent.innerHTML = `
                    <div style="padding: 2rem; text-align: center;">
                        <h3>Error loading movie details</h3>
                        <p>Please try again later</p>
                    </div>
                `;
            }
        }
        
        // Close movie modal
        function closeMovieModal() {
            const modalOverlay = document.getElementById('modal-overlay');
            
            // Animate closing
            modalOverlay.classList.remove('active');
            
            // Remove body class
            document.body.classList.remove('modal-open');
        }
        
        // Show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
