var catBuilder = function(){
  var cats = [{name: "Boba", food: "Sock fluff", imgUrl: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", food: "Tuna", imgUrl: "http://www.gordonrigg.com/the-hub/wp-content/uploads/2015/06/little_cute_cat_1920x1080.jpg"},
  {name: "Max", food: "Whiskas Temptations", imgUrl: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Maurice the Merciless", food: "Birds and other Small Animals", imgUrl: "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg"}
  ];
  for(var cat of cats){
    addCat(cat.name, cat.food, cat.imgUrl);
  }
}

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
  catBuilder();
}

window.onload = app;