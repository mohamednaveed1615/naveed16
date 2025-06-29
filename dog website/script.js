// Get elements from the page
const breedSelect = document.getElementById('breedSelect');
const dogImageContainer = document.getElementById('dogImageContainer');

// Step 1: Get the list of breeds from the Dog API
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message); // Get breed names
    // Step 2: Add each breed to the dropdown
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
      breedSelect.appendChild(option);
    });
  });

// Step 3: When the user selects a breed, show an image
breedSelect.addEventListener('change', () => {
  const selectedBreed = breedSelect.value;
  if (!selectedBreed) return;

  const apiUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      dogImageContainer.innerHTML = `<img src="${data.message}" alt="Dog Image">`;
    });
});


