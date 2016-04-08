//Business logic//
function Pizza (size, ingredients) {
  this.pizzaSize = size;
  this.pizzaIngredients = ingredients;
}

Pizza.prototype.price = function() {
     var price = 0;

    if (this.pizzaSize === 1) {
       price += 2;
       } if (this.pizzaSize === 2) {
        price += 4;
       } if (this.pizzaSize === 3) {
         price += 6;
       } if (this.pizzaSize === 4) {
          price += 8;
       } if (this.pizzaSize === 6) {
           price += 10;
       } if (this.pizzaSize === 8) {
            price += 12;
       } if (this.pizzaSize === 14) {
       price += 23;
     }
       if (this.pizzaIngredients === X-Tra Cheese || this.pizzaIngredients === Pepperoni || this.pizzaIngredients === Sausage || this.pizzaIngredients === Canadian Bacon || this.pizzaIngredients === Ham || this.pizzaIngredients === Pineapple || this.pizzaIngredients === Garlic || this.pizzaIngredients === Basil || this.pizzaIngredients === Roma Tomatoes || this.pizzaIngredients === Spinach || this.pizzaIngredients === Olives || this.pizzaIngredients === Peppers || this.pizzaIngredients === Garlic || this.pizzaIngredients === Onions)  {
         price =+ 1
    }  if (this.pizzaIngredients === Triple Cheese || Stir Fry Peppers and Onions || Thick Cut Bacon || Organic                  Beef || Red Veggie Mix || Green Veggie Mix || Spicy Peppers Mix || Permium Sausage ) {
        price += 2
    }
      return price;
  }
// User Interface Locic//
  $(document).ready(function() {
    $("#input").submit(function(event){
      event.preventDefault();
      var inputName = $("input#name").val();
      var inputSize = $("#size option:selected").val();
      var inputTopp = $("#toppings option:selected").val();
      var newPizza = new Pizza(inputSize, inputTopp);

      var result = newPizza.price();

      $("#output").text(result)
        $("#output").show();
        $("#output").text(inputName)
        $("#output").text(result);
      });


    });
