function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(el => {
        const file = el.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => response.ok ? response.text() : Promise.reject(response))
                .then(data => {
                    el.innerHTML = data;

                })
                .catch(err => {
                    console.error(`Error loading ${file}:`, err);
                });
        }
    });
  }

  
document.addEventListener('DOMContentLoaded', includeHTML);
