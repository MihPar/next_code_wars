// Define the Dog object
function Dog() {}

// Define the bark method for Dog object
Dog.prototype.bark = function() {
  return "Woof";
};

// Create an instance of snoopy as a Dog
let snoopy = new Dog();

// Create an instance of scoobydoo as a Dog
let scoobydoo = new Dog();

// Now both snoopy and scoobydoo can bark
console.log(snoopy.bark()); // Outputs "Woof"
console.log(scoobydoo.bark()); // Outputs "Woof"
