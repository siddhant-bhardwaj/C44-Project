var eren;
var eren_img;
var bg,bg_img;
var bg1,bg1_img;
var jump;

/*<!DOCTYPE html><html><head>
    <script src="p5.js"></script>
    <script src="p5.dom.min.js"></script>
    <script src="p5.sound.min.js"></script>
<script src="./p5.play.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">

  </head>
  <body>
      <script src="sketch.js"></script>
      <script src="work.py"></script>
     

</body></html>*/ 


function preload(){
  eren_img=loadImage("Images/Eren.png");
  bg_img=loadImage("Images/Background.jpg");
  bg1_img=loadImage("Images/Background.jpg");
}

function setup() {
  createCanvas(1000,1000);
  bg1=createSprite(1500,250,1200,800);
  bg1.addImage(bg1_img);
  bg1.scale=2.5;
  bg=createSprite(780,250,1200,800);
  bg.addImage(bg_img);
  bg.scale=2.5;
 
  eren=createSprite(200,480,20,20);
  eren.addImage(eren_img);
  bg.velocityX=-5;
  jump=createSprite(1000,600,40,40);
}

function draw() {
  background(0,0,0); 

if(keyDown("space")){
  eren.y=eren.y-10;
}
  
 if(bg.x<0){
   bg.x=bg.width;
 }


  drawSprites();
}

function mousePressed(){
  
}
