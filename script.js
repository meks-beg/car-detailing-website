// Intersection Observer options
const options = {
    root: null, // use the viewport as the root
    rootMargin: '0px', // no margin
    threshold: 0.5 // trigger when 50% of the element is visible
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

// Target element to observe
const targetElement = document.querySelector('.second-about');

// Start observing the target element
observer.observe(targetElement);