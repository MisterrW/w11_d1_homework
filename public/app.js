var createCat = function(){
  var cat = document.createElement('ul');
  cat.classList.add('cat');
  return cat;
}

var createLi = function(text){
  var li = document.createElement('li');
  li.innerText = text;
  return li;
}

var createName = function(name){
  return createLi("Name: " + name);
}

var createFood = function(food){
  return createLi("Food: " + food);
}

var appendElements = function(cats, cat, name, food){
  cat.appendChild(name);
  cat.appendChild(food);
  // cat.appendChild(image);
  cats.appendChild(cat);
}

var addCat = function(name, food){
  var cats = document.querySelector('#cats');
  var cat = createCat();
  var name = createName(name);
  var food = createFood(food);
  // var image = createImage(picture);
  appendElements(cats, cat, name, food);
}

var app = function(){
  var cats = [{name: "Dibble", food: "Tuna Chunks"},
  {name: "Fred", food: "bits of stuff"},
  {name: "Dibble", food: "Tuna Chunks"}];
  for(var cat of cats){
    addCat(cat.name, cat.food);
  }
}

window.onload = app;