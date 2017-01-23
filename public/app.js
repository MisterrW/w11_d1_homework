var createCat = function(){
  var cat = document.createElement('ul');
  cat.classList.add('cat');
  return cat;
}

var createImg = function(imgUrl){
  var img = document.createElement('img');
  img.src = imgUrl;
  img.width = "500";
  return img;
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
  return createLi("Favourite food: " + food);
}

var appendElements = function(cats, cat, name, food, image){
  cat.appendChild(name);
  cat.appendChild(food);
  cat.appendChild(image);
  cats.appendChild(cat);
}

var addCat = function(name, food, imgUrl){
  var cats = document.querySelector('#cats');
  var cat = createCat();
  var name = createName(name);
  var food = createFood(food);
  var image = createImg(imgUrl);
  appendElements(cats, cat, name, food, image);
}

var app = function(){
  var cats = [{name: "Dibble", food: "Tuna Chunks", imgUrl: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Fred", food: "bits of stuff", imgUrl: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Maurice the Merciless", food: "Birds and other Small Animals", imgUrl: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
  ];
  for(var cat of cats){
    addCat(cat.name, cat.food, cat.imgUrl);
  }
}

window.onload = app;