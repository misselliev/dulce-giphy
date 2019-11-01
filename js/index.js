const img = document.querySelector('img');
const box = document.querySelector('input');
box.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log(box.value);
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=fOP1i89KgZLAL2lcu3PMoQ1Q7YUyMGK9&s=${box.value}`,
      { mode: 'cors' }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.classList.remove('hide');
        img.classList.add('show');
        img.src = response.data.images.original.url;
      })
      .catch((e) => {
        alert('Sorry, try again!');
      });
  }
});
