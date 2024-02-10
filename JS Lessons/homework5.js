//створити 3 обʼєкти через {}
let bookStore = {
  name: "Book Store",
  city: "Lviv",
  adress: "Shevchenka str., 1",
  owner: "John Doe",
  booksAmount: 2356,
  dateOfEsteblishment: 2004,
};

let country = {
  name: "Ukraine",
  language: "Ukranian",
  population: "37,395,654",
  capital: "Kyiv",
  area: "603,549 sq km",
};

let planet = {
  name: "Mars",
  isInSolarSystem: true,
  weight: "6.4169 x 1023 kg",
  orbitalPeriod: "687 days",
  lenghtOfTheDay: "1d 0h 37m",
  distanceFromSun: "227.9 million km",
};

//створити 3 обʼєкти через Object()
let animal = new Object({
  type: "dog",
  breed: "corgi",
  fur: "red",
  weight: "13 kg",
  likeTreats: true,
});

let car = new Object({
  model: "Nissan",
  colour: "black",
  year: 2018,
  price: "$10,000.00",
  isNew: false,
});

let engineer = new Object({
  company: "Google",
  experience: "7 years",
  remote: true,
});

//створити обʼєкт на базі протиту іншого обʼєку (using Object.create())
let dog = Object.create(animal);
dog.canFly = false;

// console.log(dog.fur);
// console.log(dog.canFly);

//створити обʼєкт на базі протиту іншого обʼєку (using __proto__)
let bookStore2 = {
  workersAmout: 4,
};

bookStore2.__proto__ = bookStore;

// console.log(bookStore2.adress);
// console.log(bookStore2.workersAmout);

//створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)

let QA_engineer = {
  isAutomation: true,
  framework: "Playwrite",
  level: "Senior",
};

QA_engineer.__proto__ = engineer;

//унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let person = {
  name: "Alice",
  age: 35,
  sex: "Female",
};

person.__proto__ = QA_engineer;

console.log(engineer.company);
console.log(QA_engineer.company, QA_engineer.level);
console.log(person.company, person.level, person.name);
