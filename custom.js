// Custom JavaScript for Ctrl+K search focus
console.log('Custom Ctrl+K script loaded');
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded fired');
  // Wait for Quarto search to be ready
  const checkForSearch = setInterval(function() {
    const searchInput = document.querySelector('#quarto-search .aa-Input');
    if (searchInput) {
      clearInterval(checkForSearch);
      console.log('Search input found:', searchInput);

      // Detect if user is on macOS
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const keyCombo = isMac ? 'Cmd+K' : 'Ctrl+K';

      // Add help text to placeholder
      const originalPlaceholder = searchInput.placeholder || 'Search...';
      const updatedPlaceholder = `${originalPlaceholder} (${keyCombo})`;
      searchInput.placeholder = updatedPlaceholder;
      console.log('Placeholder updated to:', searchInput.placeholder);

      // Ensure placeholder shows on blur when input is empty
      searchInput.addEventListener('blur', function() {
        if (!this.value.trim()) {
          this.placeholder = updatedPlaceholder;
        }
      });

      // Add event listener for Ctrl+K (or Cmd+K on Mac) with capture to override browser shortcuts
      window.addEventListener('keydown', function(e) {
        console.log('Keydown event:', e.key, 'ctrl:', e.ctrlKey, 'meta:', e.metaKey);
        if ((e.ctrlKey && !isMac) || (e.metaKey && isMac)) {
          if (e.key === 'k' || e.key === 'K') {
            console.log('Ctrl+K detected, preventing default');
            e.preventDefault();
            e.stopPropagation();
            searchInput.focus();
            console.log('Focused search input');
            return false;
          }
        }
      }, true); // Use capture phase to intercept before browser handles it
    }
  }, 100); // Check every 100ms
});
