document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PRELOADER
    ========================= */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.display = "none";
            document.body.style.opacity = "1";
        }, 800);
    });


    /* =========================
       TYPING EFFECT
    ========================= */

    const typingElement = document.querySelector(".typing");

    const words = [
        "Cyber Security Enthusiast",
        "Web Developer",
        "Penetration Tester",
        "Ethical Hacker",
        "Full Stack Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!isDeleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1500);
                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex++;

                if (wordIndex === words.length) {
                    wordIndex = 0;
                }
            }
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();


    /* =========================
       CURSOR GLOW
    ========================= */

    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        reveals.forEach((el) => {

            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    /* =========================
       ACTIVE NAV LINK
    ========================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });


    /* =========================
       DARK / LIGHT MODE TOGGLE
    ========================= */

    const toggleBtn = document.getElementById("theme-toggle");
    const icon = toggleBtn.querySelector("i");

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

    });


    /* =========================
       PROJECT CARD HOVER EFFECT
    ========================= */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 12;
            const rotateY = (centerX - x) / 12;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.05)`;

        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        });

    });

});
