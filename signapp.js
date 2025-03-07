// JavaScript to switch between login and signup forms
const switchers = [...document.querySelectorAll('.switcher')];

switchers.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'is-active' class from all form wrappers
    switchers.forEach(item => item.parentElement.classList.remove('is-active'));
    
    // Add 'is-active' class to the clicked form wrapper
    this.parentElement.classList.add('is-active');
  });
});
