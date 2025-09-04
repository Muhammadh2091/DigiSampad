// Sample news data (in real app, this would come from a database)
    const newsData = [
      {
        id: 1,
        title: 'آغاز ثبت‌نام دوره‌های تابستانی ۱۴۰۳',
        category: 'academic',
        date: '۱۰ خرداد ۱۴۰۳',
        excerpt: 'ثبت‌نام دوره‌های تقویتی و پیش‌دانشگاهی تابستان از تاریخ ۱۵ خرداد آغاز شده است...',
        content: 'متن کامل خبر در اینجا قرار می‌گیرد...'
      },
      // More news items would go here...
    ];

    // Mobile menu functionality
    function toggleMobileMenu() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('mobile-visible');
    }

    // Set active menu item
    function setActive(clickedItem) {
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');
      
      if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('mobile-visible');
      }
    }

    // Filter news by category
    function filterNews(category) {
      // Update active filter tab
      document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      event.target.classList.add('active');

      // Filter news cards
      const newsCards = document.querySelectorAll('.news-card');
      newsCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.6s ease-out';
        } else {
          card.style.display = 'none';
        }
      });

      // Check if no results
      const visibleCards = document.querySelectorAll('.news-card[style*="block"], .news-card:not([style*="none"])');
      const newsGrid = document.getElementById('newsGrid');
      
      // Remove existing empty state
      const existingEmptyState = document.querySelector('.empty-state');
      if (existingEmptyState) {
        existingEmptyState.remove();
      }

      if (visibleCards.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
          <div class="empty-icon">📰</div>
          <h3>خبری یافت نشد</h3>
          <p>در این دسته‌بندی خبری موجود نیست.</p>
        `;
        newsGrid.appendChild(emptyState);
      }
    }

    // Open news article (placeholder function)
    function openNews(newsId) {
      alert(`باز کردن خبر شماره ${newsId}\nدر نسخه کامل، این بخش به صفحه جزئیات خبر هدایت می‌شود.`);
    }

    // Show different sections (placeholder for navigation)
    function showSection(section) {
      console.log(`Navigating to ${section} section`);
      // In real app, this would navigate to different pages
    }

    // Handle window resize
    window.addEventListener('resize', function() {
      const sidebar = document.getElementById('sidebar');
      if (window.innerWidth > 768) {
        sidebar.classList.remove('mobile-visible');
      }
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

    // Add loading animation on page load
    document.addEventListener('DOMContentLoaded', function() {
      const newsCards = document.querySelectorAll('.news-card');
      newsCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    });