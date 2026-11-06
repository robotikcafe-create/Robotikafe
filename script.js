
/* =========================================
   ROBOTIKAFE - FUTURISTIC WEBSITE
   JAVASCRIPT
========================================= */


/* =========================================
   1. NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(3, 8, 15, 0.97)";
        navbar.style.boxShadow = "0 5px 25px rgba(0, 234, 255, 0.08)";
    } else {
        navbar.style.background = "rgba(5, 10, 18, 0.85)";
        navbar.style.boxShadow = "none";
    }

});


/* =========================================
   2. ACTIVE NAVIGATION
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

const sections = document.querySelectorAll(
    "main section[id]"
);

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


/* =========================================
   3. SMOOTH NAVIGATION
========================================= */

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            const navbarHeight = navbar.offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   4. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .menu-card, " +
    ".rooftop-content, .gallery-item, .contact > p"
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================
   5. BACK TO TOP BUTTON
========================================= */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.setAttribute("aria-label", "Kembali ke atas");

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";

backToTop.style.width = "48px";
backToTop.style.height = "48px";

backToTop.style.border = "1px solid #00eaff";
backToTop.style.borderRadius = "5px";

backToTop.style.background = "#071421";
backToTop.style.color = "#00eaff";

backToTop.style.fontSize = "25px";
backToTop.style.cursor = "pointer";

backToTop.style.boxShadow =
    "0 0 15px rgba(0, 234, 255, 0.3)";

backToTop.style.zIndex = "999";

backToTop.style.opacity = "0";
backToTop.style.visibility = "hidden";

backToTop.style.transition = "0.3s";

document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


backToTop.addEventListener("mouseenter", () => {

    backToTop.style.background = "#00eaff";
    backToTop.style.color = "#050a12";
    backToTop.style.boxShadow =
        "0 0 25px rgba(0, 234, 255, 0.7)";

});


backToTop.addEventListener("mouseleave", () => {

    backToTop.style.background = "#071421";
    backToTop.style.color = "#00eaff";
    backToTop.style.boxShadow =
        "0 0 15px rgba(0, 234, 255, 0.3)";

});


/* =========================================
   6. AUTOMATIC COPYRIGHT YEAR
========================================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} ROBOTIKAFE. ALL RIGHTS RESERVED.`;

}


/* =========================================
   7. ONLINE STATUS ANIMATION
========================================= */

const statusDot = document.querySelector(".status-dot");

if (statusDot) {

    const statusText = statusDot.parentElement;

    statusText.setAttribute("aria-label", "Robotikafe online");

}


/* =========================================
   8. CONSOLE INFORMATION
========================================= */

console.log(
    "%c ROBOTIKAFE SYSTEM ",
    "background: #00eaff; color: #050a12; font-size: 20px; font-weight: bold; padding: 10px;"
);

console.log(
    "%c SYSTEM STATUS: ONLINE ",
    "color: #00eaff; font-size: 14px;"
);

console.log(
    "Welcome to ROBOTIKAFE - Where Technology Meets Taste."
);


/* =========================================
   SYSTEM INITIALIZED
========================================= */

updateActiveNavigation();

console.log("ROBOTIKAFE JavaScript loaded successfully!");
