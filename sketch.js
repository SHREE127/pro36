//Create variables here
var dog, happyDog;
var feed, addFood;
var fedTime, lastFed;
var foodObj;
var database,foodS,foodStock;

function preload()
{
  //load images here
  d1 = loadImage("images/dogImg.png")
  d2 = loadImage("images/dogImg1.png")

}

function setup() {
 database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,350);
  dog.addImage(d1);
  dog.scale=0.5

  foodStock=database.ref('food');
  foodStock.on("value",readStock)

  feed= createButton("FEED THE DOG")
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFoodS=createButton("ADD FOOD");
  addFoodS.position(800,95)
  addFoodS.mousePressed(addFood);

  
}


function draw() {  

  background(rgb(46,139,87))

  drawSprites();
  //add styles here
  fill(255,255,254)
  textSize(15);

  if(lastFed>=12){
    text("Last Feed : "+lastFed%12+" PM", 350,30)
  }
  else if(lastFed==0){
    text("Last Feed : 12AM", 350, 30)
  }else{
    text("Last Feed : "+ lastFed+ "AM", 350,30)
  }
  
  fedTime=database.ref('feedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })

}

/*function readStock(data){

  foodS= data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x-=1
  }
  database.ref('/').update({
    food: x
  })
}*/

function addFood(){
  //addFoodS.mousePressed(addFood)

  foodStock+=1
}

function feedDog(){

  dog.addImage(d2);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime: hour()
  })
}

