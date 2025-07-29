
  document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('input[name="toggle"]');
    const banner = document.getElementById('no-record-banner');

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        banner.classList.remove('govuk-visually-hidden');
      } else {
        banner.classList.add('govuk-visually-hidden');
      }
    });
  });
