"strict";
// Typewriter
const texts = [
  "Hi, I’m Divyash Chettri.",
  "I build clean, secure, and meaningful websites.",
  "BCA Student | Cloud Computing & Cyber Security",
  "Full-Stack Web Developer | React & Node.js",
  "Always Learning, Always Creating, Always Growing",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typewriter").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // pause before next line
  } else {
    setTimeout(type, 100);
  }
})();

// background on scroll navigaation
const header = document.querySelector(".header ");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Testimonial Navigation

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
let ndx = 0;

function showTestimonial(n) {
  testimonials.forEach((t) => t.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  testimonials[n].classList.add("active");
  dots[n].classList.add("active");
}

function nextTestimonial() {
  ndx = (ndx + 1) % testimonials.length;
  showTestimonial(ndx);
}

setInterval(nextTestimonial, 2000); // Auto-slide every 4s

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    ndx = i;
    showTestimonial(ndx);
  });
});

//  Year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

// Make Mobile Navigation Work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Close Movile Nav
if (link.classList.contains("main-nav-link"))
  headerEl.classList.toggle("nav-open");

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
