const img = document.querySelector('img');
fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=fOP1i89KgZLAL2lcu3PMoQ1Q7YUyMGK9&s=dogs',
  { mode: 'cors' }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });
