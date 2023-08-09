const container = document.getElementById("container");// pobranie elementu o id "container" ze sturktury DOM i zapisuje go w zmiennej container
let currentColor = 'black'
const colors = { black: 'black' } // zmiena jako obiekt black


function makeRows(rows, cols) { // funkcja przyjmuje dwa argumenty rows i cols
  container.style.setProperty('--grid-rows', rows); //Ustawia zmienną CSS --grid-rows na wartość rows w elemencie container. To jest technika zastosowania zmiennych CSS (Custom Properties) do dynamicznego określania właściwości stylów.
  container.style.setProperty('--grid-cols', cols); // Ustawia zmienną CSS --grid-cols na wartość cols w elemencie container. To definiuje liczbę kolumn w siatce.
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item"; // Dodaje stworzoną komórkę do kontenera i ustawia jej klasę na "grid-item". Klasa ta może być wykorzystywana do stosowania stylów CSS.
    cell.addEventListener('click', e => e.target.classList.add(colors[currentColor]));
    cell.addEventListener('mouseover', e => {
      e.target.style.backgroundColor = colors[currentColor];
    });
    
};
}; 

function changeGridSize(rows, cols) {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => item.remove()); // Usuwa istniejące elementy siatki

  makeRows(rows, cols); // Tworzy nową siatkę z nowymi rozmiarami
}



function setSquers() { // funkcja przypisana do przycisku, gdzie uzytkownik wprowadza ilosc kwadratow do wygenerowania
  let number = parseInt(prompt("Please set the number of squares"));
  if (number >= 100) {
    alert("Max number is 100");
  } else {
    changeGridSize(number, number);
    alert("Number of squares set to: " + number);
  }
}



makeRows(16, 16);

