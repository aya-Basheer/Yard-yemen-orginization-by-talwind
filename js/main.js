// زر الوضع الداكن/الفاتح
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

// البحث
const searchToggle = document.getElementById('search-toggle');
const searchOverlay = document.getElementById('search-overlay');
const closeSearch = document.getElementById('close-search');

searchToggle.addEventListener('click', () => {
  searchOverlay.classList.remove('hidden');
});
closeSearch.addEventListener('click', () => {
  searchOverlay.classList.add('hidden');
});

// زر اللغة
document.getElementById('lang-toggle').addEventListener('click', () => {
  alert('it will be insert arabic lanaguage latar');
  // يمكنك حفظ اللغة في localStorage
});

// الاشتراك
document.getElementById('subscribe-btn').addEventListener('click', () => {
  const email = document.getElementById('subscribe-email').value;
  if (email && email.includes('@')) {
    localStorage.setItem('subscribedEmail', email);
    alert('Subscripation successful');
  } else {
    alert('please enter valid email');
  }
});

// Intersection Observer للأنيميشن
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));
