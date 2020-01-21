'use strict'


// Global Variables
var productsParent = document.getElementById('productsParent');
var leftProduct = document.getElementById('left');
var middleProduct = document.getElementById('middle');
var rightProduct = document.getElementById('right');

// Set global index for product array
var leftIndex = null;
var middleIndex = null;
var rightIndex = null;

//Votes & Views
var productVotes = 0;
var votes = 10;

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

  // console.log('left product',leftProduct);
  // console.log('Left Index', leftIndex);
  
  leftProduct.src = Product.allImages[leftIndex].file;
  Product.allImages[leftIndex].views++;

  middleProduct.src = Product.allImages[middleIndex].file;
  Product.allImages[middleIndex].views++;

  rightProduct.src = Product.allImages[rightIndex].file;
  Product.allImages[rightIndex].views++;
}

// // Add Event Listener
var handleClick = function(event) {
  var productClicked = event.target.id;

  if(productClicked !== productsParent.id){
    productVotes++
    // console.log('votes', votes);
    if(productClicked === 'left'){
      Product.allImages[leftIndex].clicks++;
    } else if(productClicked === 'middle'){
      Product.allImages[middleIndex].clicks++;
    }else if(productClicked === 'right'){
      Product.allImages[rightIndex].clicks++;
    }else{
      alert('Please click on one of the images.');
    }
  }
  console.log('bag',Product.allImages[0]);
  console.log('bathroom',Product.allImages[1]);
  console.log('boots',Product.allImages[2]);
  // console.log(productClicked);
  setRandomIndexes();
  renderProduct();
  if (productVotes === votes){
    productsParent.removeEventListener('click', handleClick);
  }
}
// console.log(productsParent);
productsParent.addEventListener('click', handleClick);

new Product('bag', '/img/bag.jpg');

new Product('banana', '/img/banana.jpg');
new Product('bathroom', '/img/bathroom.jpg');
new Product('boots', '/img/boots.jpg');
new Product('breakfast', '/img/breakfast.jpg');
new Product('bubblegum', '/img/bubblegum.jpg');
new Product('chari', '/img/chair.jpg');
new Product('cthulu', '/img/cthulhu.jpg');
new Product('dogDuck', '/img/dog-duck.jpg');
new Product('dragon', '/img/dragon.jpg');
new Product('pen', '/img/pen.jpg');
new Product('petSweep', '/img/pet-sweep.jpg');
new Product('scissors', '/img/scissors.jpg');
new Product('shark', '/img/shark.jpg');
new Product('sweep', '/img/sweep.png');
new Product('tauntaun', '/img/tauntaun.jpg');
new Product('unicorn', '/img/unicorn.jpg');
new Product('usb', '/img/usb.gif');
new Product('waterCan', '/img/water-can.jpg');
new Product('wineGlass', '/img/wine-glass.jpg');

console.log(Product.allImages);
console.log('generator', randomProduct());
console.log(generateRandomIndex());
console.log(setRandomIndexes());
renderProduct();
console.log(generateRandomIndex());


// console.log('shark', Product.shark);
// console.log('usb', Product.usb);