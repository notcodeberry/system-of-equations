const button = document.getElementById("button");
button.addEventListener("click", calculate);

function calculate() {
  const a1 = document.getElementById("a1").valueAsNumber;
  const b1 = document.getElementById("b1").valueAsNumber;
  const c1 = document.getElementById("c1").valueAsNumber;
  const a2 = document.getElementById("a2").valueAsNumber;
  const b2 = document.getElementById("b2").valueAsNumber;
  const c2 = document.getElementById("c2").valueAsNumber;

  const w = a1 * b2 - a2 * b1;
  const wx = c1 * b2 - c2 * b1;
  const wy = a1 * c2 - a2 * c1;

  const wynik = document.getElementById("wynik");

  if (w != 0) {
    const x = wx / w;
    const y = wy / w;
    wynik.innerHTML = `x = ${x}, y = ${y}`;
  } else {
    if (wx == 0 && wy == 0) {
      wynik.textContent = "Uklad jest nieoznaczony";
    } else {
      wynik.textContent = "Uklad jest sprzeczny";
    }
  }
}
