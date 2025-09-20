/* Global Variables */
let previousFocus = null;

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Setup mobile menu
  setupMobileMenu();

  // Setup theme based on saved preference
  setupTheme();

  // Setup keyboard navigation
  setupKeyboardNavigation();

  // Show initial animations
  setTimeout(() => {
    const mainCard = document.querySelector('.main-card');
    if (mainCard) mainCard.style.animation = 'slideUp 0.8s ease-out';
  }, 100);

  // Hide spinner after page load
  hideLoading();
}

/* ------------------------- */
/* Mobile Menu Functions */
/* ------------------------- */
function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobileOverlay');

  const isVisible = sidebar.classList.contains('mobile-visible');

  if (isVisible) {
    sidebar.classList.remove('mobile-visible');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    sidebar.setAttribute('aria-hidden', 'true');
  } else {
    sidebar.classList.add('mobile-visible');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    sidebar.setAttribute('aria-hidden', 'false');

    const firstNavItem = sidebar.querySelector('.nav-item');
    if (firstNavItem) firstNavItem.focus();
  }
}

function setupMobileMenu() {
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    if (
      window.innerWidth <= 768 &&
      sidebar &&
      !sidebar.contains(e.target) &&
      toggleButton &&
      !toggleButton.contains(e.target)
    ) {
      sidebar.classList.remove('mobile-visible');
    }
  });

  // Close menu on resize if desktop
  window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768 && sidebar) {
      sidebar.classList.remove('mobile-visible');
    }
  });
}

/* ------------------------- */
/* Navigation Functions */
/* ------------------------- */
function setActive(element) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    item.setAttribute('aria-selected', 'false');
  });

  element.classList.add('active');
  element.setAttribute('aria-selected', 'true');

  addRippleEffect(element);

  // Close mobile menu after selection
  if (window.innerWidth <= 768) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('mobile-visible');
  }
}

function handleNav(button) {
  setActive(button);

  const pageMap = {
    "اخبار": "news.html",
    "ورود": "login.html",
    "ثبت‌نام": "register.html",
    "تقویم": "calendar.html",
    "خلاصهٔ درس": "summary.html",
    "تولدها": "birthdays.html",
    "آلبوم": "album.html"
  };

  const labelSpan = button.querySelector('span:not(.nav-icon)');
  const label = labelSpan ? labelSpan.innerText.trim() : null;
  const url = pageMap[label];

  if (url) {
    showLoading();
    setTimeout(() => {
      hideLoading();
      showNotification(`در حال انتقال به بخش ${label}...`, 'success');
      window.location.href = url;
    }, 500);
  }
}

/* ------------------------- */
/* Theme Functions */
/* ------------------------- */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';

  showNotification(`تم ${newTheme === 'dark' ? 'تیره' : 'روشن'} فعال شد.`);
}

function setupTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
  }
}

/* ------------------------- */
/* Notifications */
/* ------------------------- */
function showNotification(message, type = 'success') {
  const container = document.getElementById('notificationsContainer');
  if (!container) return;

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.setAttribute('role', 'alert');
  notification.setAttribute('aria-live', 'assertive');

  container.appendChild(notification);

  setTimeout(() => notification.classList.add('show'), 10);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) container.removeChild(notification);
    }, 300);
  }, 5000);
}

/* ------------------------- */
/* Loading Spinner */
/* ------------------------- */
function showLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = 'flex';
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = 'none';
}

/* ------------------------- */
/* Ripple Effect */
/* ------------------------- */
function addRippleEffect(element) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  element.appendChild(ripple);

  setTimeout(() => {
    if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
  }, 600);
}

/* ------------------------- */
/* Keyboard Navigation */
/* ------------------------- */
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && sidebar.classList.contains('mobile-visible')) {
        sidebar.classList.remove('mobile-visible');
      }
    }

    // Navigate nav items with arrow keys
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const items = document.querySelectorAll('.nav-item');
      const active = document.querySelector('.nav-item.active');
      let index = Array.from(items).indexOf(active);

      if (e.key === 'ArrowRight') index = (index + 1) % items.length;
      else index = (index - 1 + items.length) % items.length;

      if (items[index]) {
        items[index].focus();
        items[index].click();
      }
    }
  });
}

/* ------------------------- */
/* Ripple CSS */
/* ------------------------- */
const rippleStyles = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);