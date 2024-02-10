let carFuel = "gas";
let carSize = "L";

function carRefueling(carFuel = "disel", carSize = "XL") {
  console.log(`Заправка для ${carSize} авто, тип палива "${carFuel}"`);
}

carRefueling(carFuel, carSize);

carFuel = "gas";
carSize = "M";

carRefueling(carFuel, carSize);

carSize = "S";

carRefueling(carFuel, carSize);

carRefueling();
