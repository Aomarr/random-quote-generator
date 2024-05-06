let quote = document.querySelector(".quote-body");
let author = document.querySelector(".author");

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.textContent = data.content;
      return data;
    })
    .then((data) => (author.textContent = data.author))
    .catch((error) => console.error(error));
}

getQuote();

const generate = document.querySelector(".generate");
generate.addEventListener("click", getQuote);

const copy = document.querySelector(".copy");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(
    `${quote.textContent} - Quote by ${author.textContent}`
  );
  window.alert("Quote has been copied to clipboard successfully!");
});
