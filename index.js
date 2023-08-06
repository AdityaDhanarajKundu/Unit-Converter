//getting all the DOM elements
const input = document.getElementById("text");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const area = document.getElementById("area");

let num = 0;

function pEnter(){
    num= input.value;
    convertMeters();
    convertLiters();
    convertKilo();
    convertArea();
}

function convertMeters(){
    let meters = (num*0.3048).toFixed(2);
    let feet = (num*3.2808).toFixed(2);

    length.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
}

function convertLiters(){
    let liters = (num * 0.264172).toFixed(2);
    let gallons = (num * 3.78541).toFixed(2);
    volume.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`;
}

function convertKilo(){
    let kilos = (num * 2.20462).toFixed(2);
    let pounds = (num * 0.453592).toFixed(2);
    mass.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`;
}

function convertArea(){
    let sfeet = (num*10.764).toFixed(2);
    let smeter = (num*0.092903).toFixed(2);
    area.textContent= `${num} sq.meter = ${sfeet} sq.feet | ${num} sq.feet = ${smeter} sq.meter`;
}