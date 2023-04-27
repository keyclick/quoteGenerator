const generateBtn = document.querySelector('#generate-btn');
const quoteEl = document.querySelector('#quote');

generateBtn.addEventListener('click', () => {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quote = data.content;
      const author = data.author;
      quoteEl.innerHTML = `"${quote}"<br>- ${author}`;
    })
    .catch(error => console.log(error));
});
