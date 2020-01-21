'use strict'


// Global Variables
var productsParent = document.getElementById('products');
var leftProduct = document.getElementById('left');
var middleProduct = document.getElementById('middle');
var rightProduct = document.getElementById('right');

// Set global index for product array
var leftIndex = null;
var middleIndex = null;
var rightIndex = null;

//

// arrays
Product.allImages = [];



// Constructor fucntion creating objects
function Product(name, file) {
  this.name = name;
  this.file = file;
  this.clicks = 0;
  this.views = 0;

  Product.allImages.push(this);
}

// Generate Random Number
function randomProduct() {
  var randomNumber = Math.floor(Math.random() * Product.allImages.length);
  return randomNumber;
}

function generateRandomIndex(){
  var randomIndex = [null, null, null];
  do{
    for(var i = 0; i < randomIndex.length; i++){
      randomIndex[i] = randomProduct();
    }
    console.log('random', randomIndex[0]);
  }while(
    randomIndex[0] === randomIndex[1] ||
    randomIndex[1] === randomIndex[2] ||
    randomIndex[0] === randomIndex[2])
  return randomIndex;
}

//Place random indes into L/M/R index variables.
function setRandomIndexes(){
  var indexArray = generateRandomIndex();
  leftIndex = indexArray[0];
  middleIndex = indexArray[1];
  rightIndex = indexArray[2];
}

// Render Images
function renderProduct(){

  console.log('left',leftProduct);
  console.log('LIndex', leftIndex);
  leftProduct.src = Product.allImages[leftIndex].file;
  middleProduct.src = Product.allImages[middleIndex].file;
  rightProduct.src = Product.allImages[rightIndex].file;
    
}

// // Add Event Listener



var bag = new Product('bag', '/img/bag.jpg');
console.log(bag);
var banana = new Product('banana', '/img/banana.jpg');
var batroom = new Product('bathroom', '/img/bathroom.jpg');
var boots = new Product('boots', '/img/boots.jpg');
var breakfast = new Product('breakfast', '/img/breakfast.jpg');
var bubblegum = new Product('bubblegum', '/img/bubblegum.jpg');
// var chair = new Product('chari', '/img/chair.jpg');
// var cthulhu = new Product('cthulu', '/img/cthulu.jpg');
// var dogDuck = new Product('dogDuck', '/img/dog-duck.jpg');
// var dragon = new Product('dragon', '/img/dragon.jpg');
// var pen = new Product('pen', '/img/pen.jpg');
// var petSweep = new Product('petSweep', '/img/pet-sweep.jpg');
// var scissors = new Product('scissors', '/img/scissors.jpg');
// var shark = new Product('shark', '/img/shark.jpg');
// var sweep = new Product('sweep', '/img/sweep.jpg');
// var tauntaun = new Product('tauntaun', '/img/tauntaun.jpg');
// var unicorn = new Product('unicorn', '/img/unicorn.jpg');
// var usb = new Product('usb', '/img/usb.jpg');
// var waterCan = new Product('waterCan', '/img/water-can.jpg');
// var wineGlass = new Product('wineGlass', '/img/wine-glass.jpg');

console.log(Product.allImages);
console.log('generator', randomProduct());
console.log(generateRandomIndex());
console.log(setRandomIndexes());
renderProduct();
