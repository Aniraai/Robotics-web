function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}

var observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5,
});
var loader = document.getElementById("preloader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

const targetElement = document.querySelector("#events .contant");
observer1.observe(targetElement);

const intersectionElement = document.querySelector(".intersection-trigger");

if (intersectionElement) {
  observer.observe(intersectionElement);
}

// milestone intersection observer

const targetElement1 = document.querySelector(".milecontent");
observer1.observe(targetElement1);

// /mile box intersection observer/

const mileboxElements = document.querySelectorAll(".milebox1, .milebox2");

mileboxElements.forEach((element) => {
  observer1.observe(element);
});

// testimonaial intersection observer-/

const testimonialElements = document.querySelectorAll(".testimoials div");

testimonialElements.forEach((element) => {
  observer1.observe(element);
});
testimonialElements;

// /about us section intersection -----/

const elementsToAnimate = document.querySelectorAll(
  ".us, #work1, #work2, #fun"
);

elementsToAnimate.forEach((element) => {
  observer1.observe(element);
});

// footer section intesect animation
const footerElements = document.querySelectorAll(".footbox1,lastbox");

footerElements.forEach((element) => {
  observer1.observe(element);
});

//reverse intersection

function handleReverseIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("is-visible");
      // You can add additional logic here if needed
    }
  });
}

const reverseObserver = new IntersectionObserver(handleReverseIntersection, {
  threshold: 0.0,
});

// Reverse observer for the main trigger element
if (intersectionElement) {
  reverseObserver.observe(intersectionElement);
}

// Reverse observer for the milestone intersection
reverseObserver.observe(targetElement1);

// Reverse observer for mile box intersection
mileboxElements.forEach((element) => {
  reverseObserver.observe(element);
});

// Reverse observer for testimonial intersection
testimonialElements.forEach((element) => {
  reverseObserver.observe(element);
});

// Reverse observer for about us section intersection
elementsToAnimate.forEach((element) => {
  reverseObserver.observe(element);
});

// Reverse observer for footer section intersection
footerElements.forEach((element) => {
  reverseObserver.observe(element);
});
S