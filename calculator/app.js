let view = document.getElementById("view"),
  clear = document.getElementById("Clear"),
  equal = document.getElementById("equal"),
  btn = document.querySelectorAll("strong"),
  allnumbres = Array.from(document.querySelectorAll("#allnumbres li")),
  mode;
function btnCalc(sign) {
  (view.value += sign), (mode = sign), (view.style.border =
    "1px solid #2e2d2d");
}
allnumbres.forEach(number => {
  number.addEventListener("click", e => {
    view.value += e.target.value;
  });
}), (clear.onclick = () => {
  (view.value = ""), (view.style.border = "1px solid #2e2d2d");
}), (equal.onclick = () => {
  let a = Array.from(view.value),
    x;
  "NaN" == view.value ||
  "+" == view.value ||
  "-" == view.value ||
  "÷" == view.value ||
  "^" == view.value ||
  "-" == view.value ||
  "*" == view.value ||
  "" == view.value
    ? ((view.style.border = "1px solid red"), (view.value = ""))
    : "+" == mode
      ? (
          (x = a.join("").split("+")),
          ([num1, num2] = x),
          (view.value = +num1 + +num2)
        )
      : "-" == mode
        ? (
            (x = a.join("").split("-")),
            ([num1, num2] = x),
            (view.value = +num1 - +num2)
          )
        : "÷" == mode
          ? (
              (x = a.join("").split("÷")),
              ([num1, num2] = x),
              (view.value = +num1 / +num2)
            )
          : "*" == mode
            ? (
                (x = a.join("").split("*")),
                ([num1, num2] = x),
                (view.value = +num1 * +num2)
              )
            : "^" == mode &&
              (
                (x = a.join("").split("^")),
                ([num1, num2] = x),
                (view.value = Math.pow(num1, num2))
              );
});
