// 1. Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Switch icon based on current mode
  if (body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️';
  } else {
    themeToggleBtn.textContent = '🌙';
  }
});

// 2. Project Category Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and add to clicked one
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (filterValue === 'all' || filterValue === cardCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 3. Contact Form Submission Handling
const contactForm = document.getElementById('contact-form');
const feedbackMsg = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents page reload
  
  const name = document.getElementById('name').value;
  
  // Show confirmation message
  feedbackMsg.textContent = `Thanks, ${name}! Your message has been sent.`;
  
  // Clear the form fields
  contactForm.reset();

  // Remove the message after 4 seconds
  setTimeout(() => {
    feedbackMsg.textContent = '';
  }, 4000);
});