const button = document.getElementById('tooltipBtn');
const tooltip = document.getElementById('tooltip');

button.addEventListener('mouseenter', () => {
  tooltip.classList.add('tooltip-visible');
});

button.addEventListener('mouseleave', () => {
  tooltip.classList.remove('tooltip-visible');
});
