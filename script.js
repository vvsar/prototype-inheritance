class Burger {
  static SIZE_SMALL = {"price": 50, "energy": 20}
  static SIZE_BIG = {"price": 100, "energy": 40}
  constructor(size) {
    this.size = size;
  }
}
class Hamburger extends Burger {
  static STUFFING_CHEESE = {"price": 10, "energy": 20}
  static STUFFING_SALAD = {"price": 20, "energy": 5}
  static STUFFING_POTATO = {"price": 15, "energy": 10}
  price
  energy
  constructor(size, stuffing) {
    super(size);
    this.stuffing = stuffing;
  }
  calculatePrice() {
    let price_1, price_2;
    if (this.size === 'Small') {
      price_1 = this.SIZE_SMALL[price];
    } else {
      price_1 = this.SIZE_BIG[price];
    }
    if (this.stuffing === 'Cheese') {
      price_2 = this.STUFFING_CHEESE.price;
    } else if (this.stuffing === 'Salad') {
      price_2 = this.STUFFING_SALAD.price;
    } else {
      price_2 = this.STUFFING_POTATO.price;
    }
    this.price = price_1 + price_2;
    return this.price;
  }
  calculateEnergy() {
    let energy_1, energy_2;
    if (this.size === 'Small') {
      energy_1 = this.SIZE_SMALL.energy;
    } else {
      energy_1 = this.SIZE_BIG.energy;
    }
    if (this.stuffing === 'Cheese') {
      energy_2 = this.STUFFING_CHEESE.energy;
    } else if (this.stuffing === 'Salad') {
      energy_2 = this.STUFFING_SALAD.energy;
    } else {
      energy_2 = this.STUFFING_POTATO.energy;
    }
    this.energy = energy_1 + energy_2;
    return this.energy;
  }
}
class Salad {
  static CAESAR = {"price": 100, "energy": 20}
  static OLIVIET = {"price": 50, "energy": 80}
  price
  energy
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
  calculatePrice() {
    if (this.name === 'Caesar') {
      this.price = this.CAESAR.price;
    } else {
      this.price = this.OLIVIET.price;
    }
    return this.price;
  }
  calculateEnergy() {
    if (this.name === 'Caesar') {
      this.energy = this.CAESAR.energy;
    } else {
      this.energy = this.OLIVIET.energy;
    }
    return this.energy;
  }
}
class Beverage {
  static COLA = {"price": 50, "energy": 40}
  static COFFEE = {"price": 80, "energy": 20}
  price
  energy
  constructor(name) {
    this.name = name;
  }
  calculatePrice() {
    if (this.name === 'Cola') {
      this.price = this.COLA.price;
    } else {
      this.price = this.COFFEE.price;
    }
    return this.price;
  }
  calculateEnergy() {
    if (this.name === 'Cola') {
      this.energy = this.COLA.energy;
    } else {
      this.energy = this.COFFEE.energy;
    }
    return this.energy;
  }
}

// BUTTONS 
const makeOrderBtn = document.querySelector('.make-order-btn');
makeOrderBtn.addEventListener('click', startOrder);
const nextToSaladBtn = document.querySelector('.next-to-salad');
nextToSaladBtn.addEventListener('click', next0);
const backToHmbrgrBtn = document.querySelector('.back-to-hamburger');
backToHmbrgrBtn.addEventListener('click', back1);
const nextToBvrgBtn = document.querySelector('.next-to-beverage');
nextToBvrgBtn.addEventListener('click', next1);
const backToSaladBtn = document.querySelector('.back-to-salad');
backToSaladBtn.addEventListener('click', back2);
const nextToPayBtn = document.querySelector('.next-to-payment');
nextToPayBtn.addEventListener('click', next2);
const backToBvrgBtn = document.querySelector('.back-to-beverage');
backToBvrgBtn.addEventListener('click', back3);
const payBtn = document.querySelector('.pay-btn');
payBtn.addEventListener('click', finishOrder);
const addHmbrgrBtn = document.querySelector('.add-hamburger')
addHmbrgrBtn.addEventListener('click', addHamburger);
const addSaladBtn = document.querySelector('.add-salad')
addSaladBtn.addEventListener('click', addSalad);
const addBvrgBtn = document.querySelector('.add-beverage')
addBvrgBtn.addEventListener('click', addBeverage);

// INPUTS
const hNumber = document.getElementById('number-hamburger');
hNumber.oninput = function() {
  this.value = this.value.replace(/[^0-9]/g, '');
}
const sNumber = document.getElementById('number-salad');
sNumber.oninput = function() {
  this.value = this.value.replace(/[^0-9]/g, '');
}
const bNumber = document.getElementById('number-beverage');
bNumber.oninput = function() {
  this.value = this.value.replace(/[^0-9]/g, '');
}

// ORDER TABLE
const orderTable = document.querySelector('.order-table');
const table = document.querySelector('.table');
const tableBody = document.querySelector('.tbody');

// POPUPS
const modal0 = document.querySelector('.modal0');
const modal0Content = document.querySelector('.modal0-content');
const modal1 = document.querySelector('.modal1');
const modal1Content = document.querySelector('.modal1-content');
const modal2 = document.querySelector('.modal2');
const modal2Content = document.querySelector('.modal2-content');
const modal3 = document.querySelector('.modal3');
const modal3Content = document.querySelector('.modal3-content');
const modal3Main = document.querySelector('.modal3-main');



function startOrder() {
  modal0.style.display = 'block';
  
  
}
function next0() {
  modal0.style.display = 'none';
  modal1.style.display = 'block';
  modal1Content.appendChild(orderTable);
}
function back1() {
  modal1.style.display = 'none';
  modal0.style.display = 'block';
  modal0Content.appendChild(orderTable);
}
function next1() {
  modal1.style.display = 'none';
  modal2.style.display = 'block';
  modal2Content.appendChild(orderTable);
}
function back2() {
  modal2.style.display = 'none';
  modal1.style.display = 'block';
  modal1Content.appendChild(orderTable);
}
function next2() {
  modal2.style.display = 'none';
  modal3.style.display = 'block';
  modal3Main.appendChild(orderTable);
  orderTable.style.width = '100%';
}
function back3() {
  modal3.style.display = 'none';
  modal2.style.display = 'block';
  modal2Content.appendChild(orderTable);
  orderTable.style.width = '50%';
}


window.onclick = function(event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// ORDER

let order = [];
let idNumber = 0;
let rowNumber = 0
let totalPrice = 0;
let totalEnergy = 0;
function addHamburger() {
  let size; 
  let s1 = document.getElementById('small');
  let s2 = document.getElementById('big');
  if (s1.checked) {
    size = s1.value;
  } else {
    size = s2.value;
  }
  let stuffing;
  let st1 = document.getElementById('cheese');
  let st2 = document.getElementById('salad');
  let st3 = document.getElementById('potato');
  if (st1.checked) {
    stuffing = st1.value;
  } else if (st2.checked) {
    stuffing = st2.value;
  } else {
    stuffing = st3.value;
  }
  let hamburger = new Hamburger(size, stuffing);
  hamburger.id = idNumber + 1;
  // hamburger.price = Hamburger.prototype.calculatePrice();
  // hamburger.energy = Hamburger.prototype.calculateEnergy();
  hamburger.number = +hNumber.value;
  // totalPrice += (hamburger.price * hamburger.number);
  // totalEnergy += (hamburger.energy * hamburger.number);
  order.push(hamburger);
  rowNumber++;
  let row = table.insertRow(rowNumber);
  let sell1 = row.insertCell(0);
  let sell2 = row.insertCell(1);
  let sell3 = row.insertCell(2);
  let sell4 = row.insertCell(3);
  sell1.innerHTML = `${size} hamburger with ${stuffing}`;
  sell2.innerHTML = hNumber.value;
  sell3.innerHTML = '';
  sell4.innerHTML = '';
}
function addSalad() {
  let name; 
  let n1 = document.getElementById('caesar');
  let n2 = document.getElementById('oliviet');
  if (n1.checked) {
    size = n1.value;
  } else {
    size = n2.value;
  }
  let amount;
  let a1 = document.getElementById('100');
  let a2 = document.getElementById('150');
  let a3 = document.getElementById('200');
  if (a1.checked) {
    stuffing = a1.value;
  } else if (a2.checked) {
    stuffing = a2.value;
  } else {
    stuffing = a3.value;
  }
  let salad = new Salad(name, amount);
  salad.id = idNumber + 1;
  // salad.price = Salad.prototype.calculatePrice();
  // salad.energy = Salad.prototype.calculateEnergy();
  salad.number = +sNumber.value;
  // totalPrice += (salad.price * salad.number);
  // totalEnergy += (salad.energy * salad.number);
  order.push(salad);
  rowNumber++;
  let row = table.insertRow(rowNumber);
  let sell1 = row.insertCell(0);
  let sell2 = row.insertCell(1);
  let sell3 = row.insertCell(2);
  let sell4 = row.insertCell(3);
  sell1.innerHTML = `${name} - ${amount} g`;
  sell2.innerHTML = sNumber.value;
  sell3.innerHTML = '';
  sell4.innerHTML = '';
}
function addBeverage() {
  let name; 
  let b1 = document.getElementById('cola');
  let b2 = document.getElementById('coffee');
  if (b1.checked) {
    size = b1.value;
  } else {
    size = b2.value;
  }
  let beverage = new Beverage(name);
  beverage.id = idNumber + 1;
  // beverage.price = Beverage.prototype.calculatePrice();
  // beverage.energy = Beverage.prototype.calculateEnergy();
  beverage.number = +bNumber.value;
  // totalPrice += (beverage.price * beverage.number);
  // totalEnergy += (beverage.energy * beverage.number);
  order.push(beverage);
  rowNumber++;
  let row = table.insertRow(rowNumber);
  let sell1 = row.insertCell(0);
  let sell2 = row.insertCell(1);
  let sell3 = row.insertCell(2);
  let sell4 = row.insertCell(3);
  sell1.innerHTML = `${name}`;
  sell2.innerHTML = bNumber.value;
  sell3.innerHTML = '';
  sell4.innerHTML = '';
}
function finishOrder() {
  modal3.style.display = "none";
  alert('Thank you for your order! Welcome back!');
  order.freeze();
}