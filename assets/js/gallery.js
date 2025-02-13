document.addEventListener("DOMContentLoaded", function () {
    const galleries = document.querySelectorAll('.gallery, .gallery-reverse');

    function duplicateImages(gallery) {
        const images = Array.from(gallery.children);
        let galleryWidth = gallery.scrollWidth;

        // Keep duplicating images until the total width exceeds twice the viewport width
        while (galleryWidth < window.innerWidth * 2) {
            images.forEach(img => {
                let clone = img.cloneNode(true);
                gallery.appendChild(clone);
            });
            galleryWidth = gallery.scrollWidth;
        }
    }

    galleries.forEach(duplicateImages);
});
