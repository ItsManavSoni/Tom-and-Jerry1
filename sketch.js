var background, backgroundImage
var cat, catImage1, catImage2, catImage3, catImage4
var mouse, mouseImage1, mouseImage2, mouseImage3, mouseImage4
function preload() {
    //load the images here
    backgroundImage = loadImage("garden.png")
    catImage1 = loadImage("cat1.png")
    catImage2 = loadImage("cat2.png")
    catImage3 = loadImage("cat3.png")
    catImage4 = loadImage("cat4.png")
    mouseImage1 = loadImage("mouse1.png")
    mouseImage2 = loadImage("mouse2.png")
    mouseImage3 = loadImage("mouse3.png")
    mouseImage4 = loadImage("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite (backgroundImage)
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCOde === LEFT_ARROW){
  cat.addAnimation("catRunning", catImage2);
cat.changeAnimation("catRunning");
  }

}
