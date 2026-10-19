/*
  LESSON 3: A LITTLE JAVASCRIPT
  HTML = structure, CSS = looks, JavaScript = behavior.
  The pattern you'll use constantly:
    1. Find an element on the page (document.querySelector)
    2. Listen for something to happen (addEventListener)
    3. Change the page in response
*/

// --- 1. Auto-update the year in the footer ---
// Find the element with id="year" and set its text to the current year.
document.querySelector('#year').textContent = new Date().getFullYear();


// --- 2. Mobile menu toggle ---
const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

// When the ☰ button is clicked, add/remove the "open" class on the nav.
// The CSS for .nav.open makes it visible.
toggleButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggleButton.setAttribute('aria-expanded', isOpen); // tells screen readers the state
});

// Close the menu after tapping a link (otherwise it stays open on phones).
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggleButton.setAttribute('aria-expanded', false);
  });
});

// Try it: open your browser's DevTools (F12 → Console) and type
//   document.querySelector('h1').textContent = 'Hello!'
// You just changed the page with JavaScript.
