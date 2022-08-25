const numberInput = document.getElementById("numInput");
const convertBtn = document.getElementById("conBtn")
const length = document.getElementById("lengthP");
const volume = document.getElementById("volumeP");
const mass = document.getElementById("massP");

const metersToFeet = 3.281;
const feetToMeters = 0.3048;
const literToGallon = 0.264;
const gallonToLiter = 3.78541;
const kiloToPound = 2.204;
const poundToKilo = 0.453592;

convertBtn.addEventListener("click", function () {
  length.innerHTML = meterAndFeet();
  volume.innerHTML = litersAndGallon();
  mass.innerHTML = kilosAndPounds();
});

function meterAndFeet() {
  let inputValue = numberInput.value;
  let totalFeet = inputValue * metersToFeet;
  let totalMeters = inputValue * feetToMeters;
  return `${inputValue} meters = ${totalFeet.toFixed(3)} 
  feet | ${inputValue} feet = ${totalMeters.toFixed(3)} meters`;
}

function litersAndGallon() {
  let inputValue = numberInput.value;
  let totalGallon = inputValue * literToGallon;
  let totalLiters = inputValue * gallonToLiter;
  return `${inputValue} liters = ${totalGallon.toFixed(3)} 
  gallons | ${inputValue} gallons = ${totalLiters.toFixed(3)} liters`;
}

function kilosAndPounds() {
  let inputValue = numberInput.value;
  let totalPound = inputValue * kiloToPound;
  let totalKilo = inputValue * poundToKilo;
  return `${inputValue} kilos = ${totalPound.toFixed(3)} 
  pounds | ${inputValue} pounds = ${totalKilo.toFixed(3)} kilos`;
}