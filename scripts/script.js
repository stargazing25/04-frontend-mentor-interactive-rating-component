const $form = document.getElementById('rating-options-form');
const $ratingContainer = document.querySelector('.rating-container');
const $responseContainer = document.querySelector('.response-container');
const $responseCount = document.querySelector('.response-count');

const $backButton = document.querySelector('.back-button');

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const $radioChecked = document.querySelector('input[type="radio"]:checked');
  console.log($radioChecked);
  if (!$radioChecked) return alert('Please select at least one option!');

  const rating = $radioChecked.value;

  $backButton.style.display = 'flex';
  $ratingContainer.style.display = 'none';
  $responseCount.textContent = `You selected ${rating} out of 5`;
  $responseContainer.style.display = 'flex';
});

$backButton.addEventListener('click', () => {
  $backButton.style.display = 'none';
  $responseContainer.style.display = 'none';
  $ratingContainer.style.display = 'flex';
});
