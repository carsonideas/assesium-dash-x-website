// theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Get or create icons
  let sunIcon = themeToggleBtn.querySelector('.lucide-sun');
  let moonIcon = themeToggleBtn.querySelector('.lucide-moon');
  const toggleText = themeToggleBtn.querySelector('span span');

  // Create moon icon if it doesn't exist
  if (!moonIcon) {
    const moonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    moonSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    moonSvg.setAttribute('width', '24');
    moonSvg.setAttribute('height', '24');
    moonSvg.setAttribute('viewBox', '0 0 24 24');
    moonSvg.setAttribute('fill', 'none');
    moonSvg.setAttribute('stroke', 'currentColor');
    moonSvg.setAttribute('stroke-width', '2');
    moonSvg.setAttribute('stroke-linecap', 'round');
    moonSvg.setAttribute('stroke-linejoin', 'round');
    moonSvg.setAttribute('class', 'lucide lucide-moon h-4 w-4 hidden');
    moonSvg.setAttribute('aria-hidden', 'true');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z');
    moonSvg.appendChild(path);
    
    sunIcon.parentNode.insertBefore(moonSvg, sunIcon.nextSibling);
    moonIcon = moonSvg;
  }

  // Function to hide all icons
  function hideAllIcons() {
    sunIcon.classList.add('hidden');
    moonIcon.classList.add('hidden');
  }

  // Function to apply theme
  function applyTheme(theme) {
    // Remove all theme classes
    document.documentElement.classList.remove('dark', 'light');
    hideAllIcons();
    
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      moonIcon.classList.remove('hidden');
      toggleText.textContent = 'Dark Mode';
    } else {
      document.documentElement.classList.add('dark');
      sunIcon.classList.remove('hidden');
      toggleText.textContent = 'Light Mode';
    }
  }

  // Apply initial theme
  applyTheme(currentTheme);

  // Theme toggle click handler
  themeToggleBtn.addEventListener('click', () => {
    let currentTheme = localStorage.getItem('theme') || 'dark';
    let nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  });
});

