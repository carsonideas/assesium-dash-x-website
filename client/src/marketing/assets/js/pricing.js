document.addEventListener('DOMContentLoaded', () => {
  const billingToggle = document.getElementById('billing-toggle');
  const toggleCircle = document.getElementById('toggle-circle');
  const priceDisplays = document.querySelectorAll('.price-display');
  const billingPeriods = document.querySelectorAll('.billing-period');
  const monthlyLabel = document.getElementById('monthly-label');
  const yearlyLabel = document.getElementById('yearly-label');
  let isYearly = false;

  function updatePrices() {
    const target = isYearly ? 'yearly' : 'monthly';
    priceDisplays.forEach((price) => {
      price.textContent = `$${price.dataset[target]}`;
      price.classList.add('price-animation');
      setTimeout(() => price.classList.remove('price-animation'), 500);
    });
    billingPeriods.forEach((period) => {
      period.textContent = isYearly ? 'Billed annually' : 'Billed monthly';
    });
    if (isYearly) {
      billingToggle?.classList.add('active');
      if (toggleCircle) toggleCircle.style.transform = 'translateX(1.75rem)';
      yearlyLabel?.classList.add('font-bold');
      monthlyLabel?.classList.remove('font-bold');
    } else {
      billingToggle?.classList.remove('active');
      if (toggleCircle) toggleCircle.style.transform = 'translateX(0)';
      monthlyLabel?.classList.add('font-bold');
      yearlyLabel?.classList.remove('font-bold');
    }
  }

  billingToggle?.addEventListener('click', () => {
    isYearly = !isYearly;
    updatePrices();
  });
  updatePrices();

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const sunIcon = themeToggleBtn.querySelector('.lucide-sun');
  const moonIcon = themeToggleBtn.querySelector('.lucide-moon');
  const toggleText = themeToggleBtn.querySelector('span span');

  function applyTheme(theme) {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme === 'light' ? 'light' : 'dark');
    if (moonIcon) moonIcon.classList.toggle('hidden', theme !== 'light');
    if (sunIcon) sunIcon.classList.toggle('hidden', theme === 'light');
    if (toggleText) toggleText.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
  }

  applyTheme(currentTheme);
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = (localStorage.getItem('theme') || 'dark') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  });
});
