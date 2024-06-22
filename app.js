// script.js
const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

dropdownToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const dropdownContent = toggle.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
});