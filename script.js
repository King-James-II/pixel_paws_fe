// Pet class to create virtual pets with individual hunger levels
class Pet {
  constructor(id) {
    this.id = id; // Unique identifier for each pet
    this.fedLevel = 100; // Initial hunger level
    this.fedElement = document.getElementById(`hunger${id}`); // DOM element to display hunger level
    this.messageElement = document.getElementById(`message${id}`); // DOM element to display messages
    this.displayElement = document.getElementById(`pet${id}`); // DOM element to display pet
  }

  // Method to feed the pet and increase its fed level
  feed(amount) {
    this.fedLevel += amount;
    if (this.fedLevel > 100) {
      this.fedLevel = 100; // Ensure fed level does not exceed maximum
    }
    this.fedElement.innerHTML = this.fedLevel; // Update displayed fed level
  }

  // Method to decrease the fed level of the pet over time
  decreaseFedLevel() {
    this.fedLevel -= 10;
    if (this.fedLevel < 0) {
      this.fedLevel = 0; // Ensure fed level does not become negative
      this.fedElement.innerHTML = this.fedLevel; // Update displayed fed level
    }
    if (this.fedLevel == 0) {
      this.messageElement.innerHTML = "Pet ran away"; // Display message when pet runs away
      clearInterval(pet1); // Stop feeding interval for pet 1
      clearInterval(pet2); // Stop feeding interval for pet 2
    }
    this.fedElement.innerHTML = this.fedLevel; // Update displayed fed level
  }
}

// Create two instances of Pet class
let pet1 = new Pet(1);
let pet2 = new Pet(2);

// Function to feed the selected pet with a specified amount
function feedPet(amount) {
  pet1.feed(amount); // Feed pet 1
}

// Variables to store selected pet and DOM elements for pets
let selectedPet = null;
const pet1Element = document.getElementById("pet1");
const pet2Element = document.getElementById("pet2");

// Function to select a pet
function selectPet(id) {
  pet1Element.classList.remove("selected"); // Remove selected class from pet 1 element
  pet2Element.classList.remove("selected"); // Remove selected class from pet 2 element

  selectedPet = id; // Set selected pet
  if (id == 1) {
    pet1Element.classList.add("selected"); // Add selected class to pet 1 element
  } else {
    pet2Element.classList.add("selected"); // Add selected class to pet 2 element
  }
}

// Function to feed the selected pet
function feedPet(amount) {
  if (selectedPet === 1) {
    pet1.feed(amount); // Feed pet 1
  } else if (selectedPet === 2) {
    pet2.feed(amount); // Feed pet 2
  }
}

// Interval to decrease fed level of pets over time
setInterval(() => {
  pet1.decreaseFedLevel(); // Decrease fed level for pet 1
  pet2.decreaseFedLevel(); // Decrease fed level for pet 2
}, 5000);

// Select pet 1 by default
selectPet(1);
