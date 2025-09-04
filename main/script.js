// Mobile menu functionality
    function toggleMobileMenu() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('mobile-visible');
    }

    // Set active menu item
    function setActive(clickedItem) {
      // Remove active class from all items
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Add active class to clicked item
      clickedItem.classList.add('active');
      
      // Close mobile menu after selection
      if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('mobile-visible');
      }
    }

    // Handle window resize
    window.addEventListener('resize', function() {
      const sidebar = document.getElementById('sidebar');
      if (window.innerWidth > 768) {
        sidebar.classList.remove('mobile-visible');
      }
    });

    // Smooth scroll behavior for better UX
    document.addEventListener('DOMContentLoaded', function() {
      // Add loading animation delay
      setTimeout(() => {
        document.querySelector('.main-card').style.animation = 'slideUp 0.8s ease-out';
      }, 100);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const sidebar = document.getElementById('sidebar');
      const toggleButton = document.querySelector('.mobile-menu-toggle');
      
      if (window.innerWidth <= 768 && 
          !sidebar.contains(event.target) && 
          !toggleButton.contains(event.target)) {
        sidebar.classList.remove('mobile-visible');
      }
    });