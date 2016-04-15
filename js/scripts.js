//Business logic//
function Pizza (size, cheese, meat, vegges) {
  this.pizzaSize = size;
  this.pizzaCheese = cheese;
  this.pizzaMeat = meat;
  this.pizzaVegges = vegges;
}


        Pizza.prototype.price = function() {

         var price = 0;

         if (this.pizzaSize === 1) {
            price += 2;
       } else if (this.pizzaSize === 2) {
            price += 4;
       } else if (this.pizzaSize === 3) {
            price += 6;
       } else if (this.pizzaSize === 4) {
            price += 8;
       } else if (this.pizzaSize === 6) {
            price += 10;
       } else if (this.pizzaSize === 8) {
            price += 12;
       } else if (this.pizzaSize === 14) {
            price += 23;
       } if (this.pizzaCheese === 1) {
            price += 2;
       } else if (this.pizzaCheese === 2) {
            price += 4;
       } if (this.pizzaMeat === 1) {
            price += 2;
       } if (this.pizzaVegges === 1) {
            price += 2;
       };

       return price;
};
      //    if (this.pizzaCheese === "ricotta" || this.pizzaCheese === "mozzerela" || this. === "4 Cheese Blend") {
      //      price += 2;
      //  } else if (this.meat === "pepperoni" || this.meat === "sausage" || this.meat === "beef") {
      //      price += 3;
      //  } else if (this.vegges === "peppers" || this.vegges === "onions" || this.vegges === "tomatoes") {
      //      price += 2;
      //  }

        Pizza.prototype.showOrder = function() {
        return "Please Confirm Pizza Below:" + "</br>" + this.pizzaSize + "</br>" + "with" + this.pizzaCheese + "</br>" + this.pizzaMeat + "</br>" + this.pizzaVegges + "</br>" + "Enjoy!"
  };




// User Interface Locic//
  $(document).ready(function() {
    $("#input").submit(function(event){
      event.preventDefault();
      var inputName = $("input#name").val();
      var inputSize = parseInt($("#pizzaSize option:selected").val());
      var inputCheese = parseInt($("#pizzaCheese option:selected").val());
      var inputMeat = parseInt($("#pizzaMeat option:selected").val());
      var inputVegges = parseInt($("#pizzaVegges option:selected").val());


      if (inputSize === null || inputCheese === null || inputMeat === null || inputVegges === null) {
      alert("Must Enter All Toppings First!")
    } else {
      var newPizza = new Pizza(inputSize, inputCheese, inputMeat, inputVegges);
      var result = newPizza.price();

      $(".showName").text(inputName);
      $(".showPrice").text(result);

    }
  });
});
