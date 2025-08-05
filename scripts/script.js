const $form = document.getElementById('rating-options-form');
const $ratingContainer = document.querySelector('.rating-container');
const $responseContainer = document.querySelector('.response-container');
const $responseCount = document.querySelector('.response-count');

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const $radioChecked = document.querySelector('input[type="radio"]:checked');
  console.log($radioChecked);
  if (!$radioChecked) return alert('Please select at least one option!');

  const rating = $radioChecked.value;

  $ratingContainer.style.display = 'none';
  $responseCount.textContent = `You selected ${rating} out of 5`;
  $responseContainer.style.display = 'flex';
});
