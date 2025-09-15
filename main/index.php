<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>دیجی‌سمپاد - شهید بهشتی ۱ خوزستان</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <!-- Loading Overlay -->
  <div class="loading-overlay" id="loadingOverlay">
    <div class="loading-spinner"></div>
  </div>

  <!-- Mobile Menu Overlay -->
  <div id="mobileOverlay" class="mobile-overlay"></div>

  <!-- Theme Toggle Button -->
  <button class="theme-toggle" onclick="toggleTheme()" aria-label="تغییر تم" title="تغییر تم">
    🌙
  </button>

  <div class="main-layout">
    <!-- Mobile Menu Toggle -->
    <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" aria-label="منوی موبایل">
      ☰
    </button>

    <!-- Sidebar Navigation -->
    <aside class="sidebar" id="sidebar" role="navigation" aria-hidden="true">
      <div class="sidebar-header">
        <h3>
          <span class="menu-icon">📚</span>
          دیجی‌سمپاد
        </h3>
      </div>

      <nav class="nav-menu" role="navigation">
        <button class="nav-item active" onclick="handleNav(this)" aria-selected="true">
          <span>ورود</span>
          <span class="nav-icon"></span>
        </button>
        <button class="nav-item" onclick="handleNav(this)" aria-selected="false">
          <span>ثبت‌نام</span>
          <span class="nav-icon"></span>
        </button>
        <button class="nav-item" onclick="handleNav(this)" aria-selected="false">
          <span>اخبار</span>
          <span class="nav-icon"></span>
        </button>
        <button class="nav-item" onclick="handleNav(this)" aria-selected="false">
          <span>تولدها</span>
          <span class="nav-icon"></span>
        </button>
        <button class="nav-item" onclick="handleNav(this)" aria-selected="false">
          <span>تکالیف</span>
          <span class="nav-icon"></span>
        </button>
        <button class="nav-item" onclick="handleNav(this)" aria-selected="false">
          <span>تقویم</span>
          <span class="nav-icon"></span>
        </button>
        <button class="nav-item" onclick="handleNav(this)" aria-selected="false">
          <span>خلاصهٔ درس</span>
          <span class="nav-icon"></span>
        </button>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="content-area">
      <div class="main-card">
        <div class="logo-container">
          <img class="logo" src="../resources/Sampad.svg.png" alt="لوگوی سمپاد" />
        </div>

        <h1 class="main-title">دیجی‌سمپاد</h1>
        <h2 class="subtitle">شهید بهشتی ۱ خوزستان</h2>

        <div class="welcome-section">
          <p class="welcome-text">
            به پلتفرم آموزشی دیجی‌سمپاد خوش آمدید. این سیستم برای بهبود فرآیند یادگیری و ارتباط بهتر بین دانش‌آموزان،
            معلمان و والدین طراحی شده است.
          </p>

          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">۳۰۰</span>
              <div class="stat-label">دانش‌آموز</div>
            </div>
            <div class="stat-item">
              <span class="stat-number">۱۲</span>
              <div class="stat-label">کلاس درس</div>
            </div>
          </div>
        </div>

        <img class="school-image" src="../resources/shahidbeheshti.webp" alt="مدرسهٔ شهید بهشتی ۱" />
      </div>
    </main>
  </div>

  <!-- Notifications Container -->
  <div id="notificationsContainer" style="position: fixed; top: 20px; right: 20px; z-index: 10000; direction: rtl;">
  </div>

  <!-- Homepage JS -->
  <script src="script.js"></script>
</body>

</html>