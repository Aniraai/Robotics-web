function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once it's animated
        }
    });
}


const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });


const intersectionElement = document.querySelector('.intersection-trigger');

if (intersectionElement) {
    observer.observe(intersectionElement);
}