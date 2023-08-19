const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
navToggle && navToggle.addEventListener("click", (() => { navMenu.classList.add("show-menu") })), navClose && navClose.addEventListener("click", (() => { navMenu.classList.remove("show-menu") }));
const navLink = document.querySelectorAll(".nav__link");

function linkAction() { document.getElementById("nav-menu").classList.remove("show-menu") }
navLink.forEach((e => e.addEventListener("click", linkAction)));
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() { let e = this.parentNode.className; for (i = 0; i < skillsContent.length; i++) skillsContent[i].className = "skills__content skills__close"; "skills__content skills__close" === e && (this.parentNode.className = "skills__content skills__open") }
skillsHeader.forEach((e => { e.addEventListener("click", toggleSkills) }));
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((e => {
    e.addEventListener("click", (() => {
        const t = document.querySelector(e.dataset.target);
        tabContents.forEach((e => { e.classList.remove("qualification__active") })), t.classList.add("qualification__active"), tabs.forEach((e => { e.classList.remove("qualification__active") })), e.classList.add("qualification__active")
    }))
}));
let projects_swiper = new Swiper(".projects__container", { cssMode: !0, loop: !0, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, pagination: { el: ".swiper-pagination", clickable: !0 } }),
    blog_swiper = new Swiper(".blog__container", { cssMode: !0, loop: !0, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, pagination: { el: ".swiper-pagination", clickable: !0 } });
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const e = window.pageYOffset;
    sections.forEach((t => {
        const n = t.offsetHeight,
            o = t.offsetTop - 50;
        sectionId = t.getAttribute("id"), e > o && e <= o + n ? document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link") : document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }))
}

function scrollHeader() {
    const e = document.getElementById("header");
    this.scrollY >= 80 ? e.classList.add("scroll-header") : e.classList.remove("scroll-header")
}

function scrollUp() {
    const e = document.getElementById("scroll-up");
    this.scrollY >= 560 ? e.classList.add("show-scroll") : e.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollActive), window.addEventListener("scroll", scrollHeader), window.addEventListener("scroll", scrollUp);
const themeButton = document.getElementById("theme-button"),
    darkTheme = "dark-theme",
    iconTheme = "uil-sun",
    selectedTheme = localStorage.getItem("selected-theme"),
    selectedIcon = localStorage.getItem("selected-icon"),
    getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light",
    getCurrentIcon = () => themeButton.classList.contains("uil-sun") ? "uil-moon" : "uil-sun";
selectedTheme && (document.body.classList["dark" === selectedTheme ? "add" : "remove"](darkTheme), themeButton.classList["uil-moon" === selectedIcon ? "add" : "remove"]("uil-sun")), themeButton.addEventListener("click", (() => { document.body.classList.toggle(darkTheme), themeButton.classList.toggle("uil-sun"), localStorage.setItem("selected-theme", document.body.classList.contains(darkTheme) ? "dark" : "light"), localStorage.setItem("selected-icon", themeButton.classList.contains("uil-sun") ? "uil-moon" : "uil-sun") }));
var form = document.getElementById("my-form");
async function handleSubmit(e) {
    e.preventDefault();
    var t = document.getElementById("contact__status"),
        n = new FormData(e.target);
    fetch(e.target.action, { method: form.method, body: n, headers: { Accept: "application/json" } }).then((e => { e.ok ? (t.classList.add("success"), t.innerHTML = "Thanks for your submission !", form.reset()) : e.json().then((e => { Object.hasOwn(e, "errors") ? (t.classList.add("error"), t.innerHTML = e.errors.map((e => e.message)).join(", ")) : (t.classList.add("error"), t.innerHTML = "Oops! Something went wrong") })) })).catch((e => { t.innerHTML = "Oops! There was a problem submitting your form" }))
}
form.addEventListener("submit", handleSubmit);
const sr_right = ScrollReveal({ origin: "right", distance: "50px", duration: 2500 });
sr_right.reveal(".home__img", { distance: "120px" }), sr_right.reveal(".home__data");
const sr_left = ScrollReveal({ origin: "left", distance: "50px", duration: 2500 });
sr_left.reveal(".home__social");
const sr_bottom = ScrollReveal({ origin: "bottom", distance: "50px", duration: 2500 });
sr_bottom.reveal(".home__scroll"), ScrollReveal().reveal(".section__title", { duration: 2e3, delay: 300 }), ScrollReveal().reveal(".section__subtitle", { duration: 2500, delay: 400 }), ScrollReveal().reveal(".about__container", { duration: 2e3, delay: 400 }), ScrollReveal().reveal(".skills__container", { duration: 2e3, delay: 50 }), ScrollReveal().reveal(".qualification__container", { duration: 2e3, delay: 50 }), ScrollReveal().reveal(".certification__container", { duration: 2e3, delay: 50 }), ScrollReveal().reveal(".projects__container", { duration: 2e3, delay: 50 }), ScrollReveal().reveal(".blog__container", { duration: 2e3, delay: 50 }), ScrollReveal().reveal(".contact__container", { duration: 2e3, delay: 50 });
const typed_home = new Typed("#multiple-text", { strings: ["Full Stack Developer", "UI / UX Designer", "Data Analyst", "DevOps Intern"], typeSpeed: 100, backSpeed: 30, backDelay: 1e3, loop: !0 }),
    typed_footer = new Typed("#multiple-text-footer", { strings: ["Full Stack Developer", "UI / UX Designer", "Data Analyst", "DevOps Intern"], typeSpeed: 100, backSpeed: 30, backDelay: 1e3, loop: !0 });