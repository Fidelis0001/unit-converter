/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//declarations
const distanceUnit = 3.281;
const volumeUnit = 0.264;
const massUnit = 2.204;
const input = document.getElementById("input");
const massResult = document.getElementById("mass-result");
const distanceResult = document.getElementById("distance-result");
const volumeResult = document.getElementById("volume-result");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  massResult.innerText = `${input.value} kg = ${(
    input.value * massUnit
  ).toFixed(3)} lb | ${input.value} lb = ${(input.value / massUnit).toFixed(
    3
  )} kg`;
  distanceResult.innerText = `${input.value} meters = ${(
    input.value * distanceUnit
  ).toFixed(3)} ft | ${input.value} ft = ${(input.value / distanceUnit).toFixed(
    3
  )} m`;
  volumeResult.innerText = `${input.value} l = ${(
    input.value * massUnit
  ).toFixed(3)} gal | ${input.value} gal = ${(input.value / volumeUnit).toFixed(
    3
  )} l`;
});
