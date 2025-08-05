// variables for form
const $form = document.getElementById('rating-options-form');
const $ratingContainer = document.querySelector('.rating-container');
const $responseContainer = document.querySelector('.response-container');
const $responseCount = document.querySelector('.response-count');
let $radioChecked = null;

// variables for button back
const $backButton = document.querySelector('.back-button');

// form
$form.addEventListener('submit', (e) => {
  e.preventDefault();
  $radioChecked = document.querySelector('input[type="radio"]:checked');
  if (!$radioChecked) return alert('Please select at least one option!');

  const rating = $radioChecked.value;

  $backButton.style.display = 'flex';
  $ratingContainer.style.display = 'none';
  $responseCount.textContent = `You selected ${rating} out of 5`;
  $responseContainer.style.display = 'flex';
});

// button
$backButton.addEventListener('click', () => {
  $radioChecked.checked = false;
  $backButton.style.display = 'none';
  $responseContainer.style.display = 'none';
  $ratingContainer.style.display = 'flex';
});
