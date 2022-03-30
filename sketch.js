var trex ,trex_running;
var ground,groundimage,invisivbleground,cloudimg,obstacleimg1,obstacleimg2,obstacleimg3,obstacleimg4,obstacleimg5,obstacleimg6

function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")
cloudimg = loadImage ("cloud.png")
obstacleimg1 = loadImage("obstacle1.png")
obstacleimg2 = loadImage("obstacle2.png")
obstacleimg3 = loadImage("obstacle3.png")
obstacleimg4 = loadImage("obstacle4.png")
obstacleimg5 = loadImage("obstacle5.png")
obstacleimg6 = loadImage("obstacle6.png")
}

function setup(){
   createCanvas(600,200)
//create a trex sprite
   trex=createSprite(50,160,100,50)
   trex.addAnimation("running",trex_running)
   trex.scale=0.5
//createing ground
   ground=createSprite(200,180,400,20)
   ground.addImage(groundimage)
   ground.velocityX=-3
//createing invisivbleground
   invisivbleground = createSprite(200,190,400,10)
   invisivbleground.visible = false
}

function draw(){
  background(180)
  var ran = Math.round(random(1,100))
  console.log(ran)

trex.collide(invisivbleground)
if (keyDown("space")&& trex.y>150){
  trex.velocityY = -10
}
trex.velocityY = trex.velocityY + 0.8

if(ground.x <0){
  ground.x = ground.width/2
}
spawnClouds()
spawnObstacles()

drawSprites()
}
function spawnClouds (){

 if (frameCount % 60 ==0){

 var clouds = createSprite(600,Math.round(random(10,100)),40,10)
 clouds.velocityX = -3
 clouds.addImage(cloudimg)
 clouds.scale = 0.6 
 clouds.depth = trex.depth 
 trex.depth = trex.depth+1
 clouds.lifetime = 200
}
}

function spawnObstacles(){
if(frameCount % 60 == 0){
  var obstacles = createSprite(600,165,10,10)
  obstacles.velocityX = -6
  var ran = Math.round(random(1,6))
  switch(ran){
   case 1:obstacles.addImage(obstacleimg1)
   break
   case 2:obstacles.addImage(obstacleimg2)
   break 
   case 3:obstacles.addImage(obstacleimg3)
   break
   case 4:obstacles.addImage(obstacleimg4)
   break
   case 5:obstacles.addImage(obstacleimg5)
   break
   case 6:obstacles.addImage(obstacleimg6)
   break
   default:break
  }
  obstacles.scale = 0.5
  obstacles.lifetime = 300
}
}