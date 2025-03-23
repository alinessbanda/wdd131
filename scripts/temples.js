
document.addEventListener('DOMContentLoaded', function () {
    // Dynamically set the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Dynamically set the last modified date
    document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

    // Hamburger menu toggle functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        // Toggle the menu visibility
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            hamburger.textContent = 'X'; // Change hamburger to 'X' when menu is open
        } else {
            hamburger.textContent = '☰'; // Revert back to hamburger icon when menu is closed
        }
    });
});
