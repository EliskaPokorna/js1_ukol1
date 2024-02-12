const Fahrenheit = Number(prompt("Zadejte stupně Fahrnheit: "))
const Celsia = (5 * (Fahrenheit - 32)) / 9

document.body.innerHTML = "<h1>" + Fahrenheit + " stupňů Fahrnheit je: " + Celsia.toFixed(4) + " stupňů Celsia.</h1>"