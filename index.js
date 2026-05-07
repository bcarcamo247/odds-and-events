const numbers = [];
const odds = [];
const evens = [];

const app = document.querySelector("#app");

function render() {
    app.innerHTML = `
    <h1>Odds and Events</h1>
    <form id="number-form">
        <label>Add a number to bank</label>
        <input id="number-input" type="number" />
        <button>Add Number</button>
        <button id="sort-one" type="button">
            Sort 1
        </button>
        <button id="sort-all" type="button">
            Sort All
        </button>
    </form>
    <h2>Bank</h2>
    <p>${numbers}</p>
    <h2>Odds</h2>
    <p>${odds}</p>
    <h2>Evens</h2>
    <p>${evens}</p>
    `;
    
    const form = document.querySelector("#number-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const input = document.querySelector("#number-input");
        const value = Number(input.value);
        numbers.push(value);
        render();
    });

    const sortOneButton = document.querySelector("#sort-one");

sortOneButton.addEventListener("click", function (event) {

  const firstNumber = numbers.shift();

  if (firstNumber % 2 === 0) {

    evens.push(firstNumber);

  } else {

    odds.push(firstNumber);

  }

  render();

});

const sortAllButton = document.querySelector("#sort-all");

sortAllButton.addEventListener("click", function (event) {

  while (numbers.length > 0) {

    const firstNumber = numbers.shift();

    if (firstNumber % 2 === 0) {

      evens.push(firstNumber);

    } else {

      odds.push(firstNumber);

    }

  }

  render();

});
}

render();