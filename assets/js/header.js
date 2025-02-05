document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split("/").pop();

    console.log("navLinks", navLinks);
    console.log("currentpage", currentPage);
    console.log("Checking for nav-links:", document.querySelectorAll('.nav-link'));

    navLinks.forEach(link => {
        console.log("Comparing:", link.getAttribute('href'), "vs", window.location.pathname);
        let linkHref = link.getAttribute('href');

        // Normalize both paths for comparison
        if (linkHref === currentPage) {
            link.classList.add('active');
            console.log('Matched & Underlined:', linkHref)
        }
    });
});