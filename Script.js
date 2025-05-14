
// Hambarger for nav section 
const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });



// this is a FAQs section code 
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const title = item.querySelector('.accordion-title');

  title.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all items
    items.forEach(i => i.classList.remove('active'));
    
    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});


// contect section 
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");
  
    if (name && email && message) {
      status.textContent = "Message sent successfully!";
      this.reset(); // Clear form
    } else {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
    }
  
    setTimeout(() => {
      status.textContent = "";
      status.style.color = "green";
    }, 4000);
  });
  