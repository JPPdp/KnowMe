document.querySelectorAll('.collapsible-wrapper').forEach(wrapper => {
  const header = wrapper.querySelector('.collapsible-header');
  const content = wrapper.querySelector('.collapsible-content');

  header.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });

  // Optional: click outside to close
  document.addEventListener('click', function(e) {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove('active');
    }
  });
});
