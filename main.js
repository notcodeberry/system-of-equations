let a1, a2, b1, b2, c1, c2, wx, wy, w, x, y;

a1 = prompt("Podaj a1");
b1 = prompt("Podaj b1");
c1 = prompt("Podaj c1");
a2 = prompt("Podaj a2");
b2 = prompt("Podaj b2");
c2 = prompt("Podaj c2");

w = a1 * b2 - a2 * b1;
wx = c1 * b2 - c2 * b1;
wy = a1 * c2 - a2 * c1;

if (w != 0) {
  x = wx / w;
  y = wy / w;
  document.write("x = " + x + "<br>");
  document.write("y = " + y + "<br>");
} else {
  if (wx == 0 && wy == 0) {
    document.write("Uklad ma nieskonczenie wiele rozwiazan");
  } else {
    document.write("Uklad jest sprzeczny");
  }
}
