class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  younger(otherUser) {
    if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}.`
    } else if (this.age > otherUser.age) {
      return `${otherUser.firstName} è più giovane di ${this.firstName}.`
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`
    }
  }
}

const marioRossi = new User("Mario", "Rossi", 45, "Roma");
const mariaRossa = new User ("Maria", "Rossa", 45, "Roma");

console.log(marioRossi.younger(mariaRossa));


let petArr = [];

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }
  }

  

const petForm = document.getElementById("petForm")
petForm.addEventListener("submit", function(event){
    event.preventDefault();
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
    const newPet = new Pet (petName, ownerName, species, breed);
    petArr.push(newPet);
    console.log(petArr);
})




