function calculatePizza() {
  
  let size = document.getElementById("pizzaSize").value;
  let price = document.getElementById("pizzaPrice").value;

  let radius = size / 2;
  let area = 3.14159 * (radius * radius);

  let costPerCm = price / area;

  let finalCost = Math.round(costPerCm);

  document.getElementById("answerText").innerHTML = "It costs " + finalCost + " tenge per square cm!";
}
