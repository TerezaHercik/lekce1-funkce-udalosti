// tady je místo pro náš program

// změna barvy čtverečku

function priKliknuti(color) {
  document.getElementById('ctverecek').style.backgroundColor = 'green';
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

 //  sečtení hodnot po kliknutí na tlačítko
// nadefinovaná funkce
function secti(a, b) {
  let c = a + b;
  return c;
}

// zavolání funkce
function vysledek(a, b) {
	document.querySelector('#vysledek').innerHTML = secti(a, b);
}





/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!")
  // změna textu ve čtverečku
  document.querySelector('#ctverecek').innerHTML = "Gratulace, právě jsi spustila tuto funkci!)";
  ctverecek.style.width = "400px";
}








