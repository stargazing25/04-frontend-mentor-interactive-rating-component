const $form = document.getElementById('rating-options-form');
const $ratingContainer = document.querySelector('.rating-container');
const $responseContainer = document.querySelector('.response-container');
const $responseCount = document.querySelector('.response-count');

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const $checkBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const total = $checkBoxes.length;

  if (total === 0) return alert('Please select at least one option!');

  $ratingContainer.style.display = 'none';
  $responseCount.textContent = `You selected ${total} out of 5`;
  $responseContainer.style.display = 'flex';
});
