function doMath() {
  
  let userName = document.getElementById("nameBox").value;
  

  let pizzaSize = document.getElementById("sizeBox").value;
  

  let pizzaPrice = document.getElementById("priceBox").value;


  if (userName == "") {

    document.getElementById("finalAnswer").innerHTML = "Error: Put your name first!";
    return;
  }
  
  if (pizzaSize <= 0) {

    document.getElementById("finalAnswer").innerHTML = "Error: Put a real size!";
    return;
  }
  
  if (pizzaPrice <= 0) {

    document.getElementById("finalAnswer").innerHTML = "Error: Put a real price!";
    return;
  }

  let radius = pizzaSize / 2;
  
  let area = 3.14 * radius * radius;
  
  let cost = pizzaPrice / area;
  
  let finalCost = Math.round(cost);

  let message = "";

  if (finalCost < 10) {

    message = "This is a cheap pizza!";
  } 

  else if (finalCost >= 10 && finalCost <= 15) {
  
    message = "This is a normal price.";
  } 

  else {
    message = "This is too expensive!";
  }

  document.getElementById("finalAnswer").innerHTML = "Hello " + userName + "! One cm costs " + finalCost + " tenge. " + message;
}
