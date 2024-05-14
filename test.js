// Intersection Observer options
const options = {
    root: null, // use the viewport as the root
    rootMargin: '0px', // no margin
    threshold: 0.3 // trigger when 50% of the element is visible
};

// Callback function to handle intersection changes
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the visibility class to start the fade-in animation
            entry.target.classList.add('fade-in-visible');
            // Unobserve the target to stop further callbacks
            observer.unobserve(entry.target);
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Target elements to observe
const targetElement1 = document.querySelector('#usluga-1');
const targetElement2 = document.querySelector('#usluga-2');
const targetElement3 = document.querySelector('#usluga-3');
const targetElement4 = document.querySelector('#usluga-4');
const targetElement5 = document.querySelector('#usluga-4-index');


if (targetElement1) {
    observer.observe(targetElement1);
} else {
    console.error("Element with ID 'usluga-4' not found.");
}

if (targetElement2) {
    observer.observe(targetElement2);
} else {
    console.error("Element with ID 'usluga-4' not found.");
}

if (targetElement3) {
    observer.observe(targetElement3);
} else {
    console.error("Element with ID 'usluga-4' not found.");
}

if (targetElement4) {
    observer.observe(targetElement4);
} else {
    console.error("Element with ID 'usluga-4' not found.");
}

if (targetElement5) {
    observer.observe(targetElement5);
} else {
    console.error("Element with ID 'usluga-4' not found.");
}