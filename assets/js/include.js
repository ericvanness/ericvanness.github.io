function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(el => {
      const file = el.getAttribute('data-include');
      if (file) {
        fetch(file)
          .then(response => {
            if (response.ok) {
              return response.text();
            }
            throw new Error('Error loading ' + file);
          })
          .then(data => {
            el.innerHTML = data;
          })
          .catch(err => {
            console.error(err);
            el.innerHTML = '<p>Error loading component: ' + file + '</p>';
          });
      }
    });
  }
  
  // Call the function after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', includeHTML);
  