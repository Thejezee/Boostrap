
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  function updateCartBadge(count) {
    const badge = document.querySelector('.cart-badge');
    badge.textContent = count;
    if (count > 0) {
      badge.style.display = 'inline';
    } else {
      badge.style.display = 'none';
    }
  }
  
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('input').value;
  
    console.log('Búsqueda:', searchTerm);
  });
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
  
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function isValidPhone(phone) {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      return re.test(phone);
    }
  
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        const formData = new FormData(form);
        
        form.querySelectorAll('.form-control').forEach(input => {
          input.classList.remove('is-invalid');
          input.classList.remove('is-valid');
        });
  
        for (let [key, value] of formData.entries()) {
          const input = form.querySelector(`[name="${key}"]`);
          
          if (!value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
          } else {
            if (key === 'email' && !isValidEmail(value)) {
              input.classList.add('is-invalid');
              isValid = false;
            } else if (key === 'phone' && !isValidPhone(value)) {
              input.classList.add('is-invalid');
              isValid = false;
            } else {
              input.classList.add('is-valid');
            }
          }
        }
  
        if (isValid) {
     
          const successAlert = document.createElement('div');
          successAlert.className = 'alert alert-success mt-3 alert-dismissible fade show';
          successAlert.innerHTML = `
            <strong>¡Gracias por contactarnos!</strong> Nos pondremos en contacto contigo pronto.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          `;
          
          form.insertAdjacentElement('afterend', successAlert);
          form.reset();
          form.classList.add('form-submitted');
  
          setTimeout(() => {
            successAlert.remove();
          }, 5000);
        }
      });
  
      form.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
          if (this.value.trim()) {
            if (this.name === 'email') {
              if (isValidEmail(this.value)) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
              } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
              }
            } else if (this.name === 'phone') {
              if (isValidPhone(this.value)) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
              } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
              }
            } else {
              this.classList.remove('is-invalid');
              this.classList.add('is-valid');
            }
          } else {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
          }
        });
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    
    contactForm.addEventListener("submit", function (event) {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      contactForm.classList.add("was-validated");
    });
  });
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  const cartBadge = document.querySelector(".cart-badge");
let cartCount = 0;

function addToCart() {
  cartCount++;
  cartBadge.textContent = cartCount;
  cartBadge.classList.add("updated");
  setTimeout(() => cartBadge.classList.remove("updated"), 500);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });