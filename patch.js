function lockEmptyCategories() {
  document.querySelectorAll('[data-cat="geo"], [data-cat="social"]').forEach((card) => {
    card.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      card.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-4px)' },
          { transform: 'translateY(0)' }
        ],
        { duration: 180, easing: 'ease-out' }
      );
    };
  });
}

lockEmptyCategories();
new MutationObserver(lockEmptyCategories).observe(document.body, { childList: true, subtree: true });
