var gameState = "Intro"
var lives = 3
var score = 0
var Level1State = 1


function preload(){
   bg2=loadImage("IMG/BG.png")
   bg3=loadImage("IMG/bg2.jpg")
   bg4=loadImage("IMG/bg4.png")
   bg1=loadImage("IMG/grassy-scenery.png")
   bucket=loadImage("IMG/bucket.png")
   cloud=loadImage("IMG/cloud1.png")
   drop=loadImage("IMG/drop2.png")
   pb=loadImage("IMG/play.png")
   nb=loadImage("IMG/next.png")
  

}

function setup(){
 
    canvas = createCanvas(displayWidth, displayHeight)
    bg=createSprite(displayWidth/2,displayHeight/2,100,100)
    bg.addImage(bg1)
    bg.scale=1.3

    playButton=createSprite(displayWidth/2,displayHeight-200,100,100)
    playButton.addImage(pb)
    nextButton=createSprite(displayWidth-150,displayHeight-200,100,100)
    nextButton.addImage(nb)
    nextButton.scale=0.5

    bucket1=createSprite(100,displayHeight/2,25,25)
    bucket1.addImage(bucket)
    bucket1.scale=0.2
    bucket2=createSprite(100,displayHeight/2-200,25,25)
    bucket2.addImage(bucket)
    bucket2.scale=0.2
    bucket3=createSprite(100,displayHeight/2+200,25,25)
    bucket3.addImage(bucket)
    bucket3.scale=0.2

    rainGroup= createGroup()

   
     
    
}

function draw(){
  
  

  if(gameState==="Intro"){
    background(bg3)
    drawSprites()
    bg.visible=false
    playButton.visible=true
    nextButton.visible=false
    bucket1.visible=false
    bucket2.visible=false
    bucket3.visible=false
    
    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("Save the Water",displayWidth/2,200)

    if(mousePressedOver(playButton)&&gameState==="Intro"){
      gameState = "Level1-Intro"

    }


  }
  
if(gameState==="Level1-Intro"){
  background(bg4)
  drawSprites()

  bg.visible=false
  playButton.visible=false
  nextButton.visible=true
  bucket1.visible=false
  bucket2.visible=false
  bucket3.visible=false

  textSize(50)
  fill("darkblue")
  textAlign(CENTER)
  text("Level 1",displayWidth/2,200)
  textSize(30)


  text("You have to Collet Rain Drops,Cilck Next To Continue",displayWidth/2,450)
  if(mousePressedOver(nextButton)&&gameState==="Level1-Intro"){
    gameState = "Level1"

  }

}

if(gameState==="Level1"){
  background("white")
  drawSprites()
   bg.visible=true
   bucket1.visible=true
   bucket2.visible=true
   bucket3.visible=true
   nextButton.visible=false
   playButton.visible=false

   rain()
   textSize(30)
   fill("black")
   textAlign(CENTER)
   text("SCORE:"+score,displayWidth-120,30)
   text("Press 'SPACE KEY' To Bring The Bucket",displayWidth-850,30)

  if(Level1State===1){
    if(keyDown("space")){
      bucket1.x=displayWidth/2
      bucket1.y=displayHeight-100
    }
    if(keyDown("left")){
      bucket1.x-=5
    }
    if(keyDown("right")){
      bucket1.x+=5
    }
    
    if(rainGroup.isTouching(bucket1)){
      rainGroup[0].destroy()
      score+=5
    }
   if(score===55){
    textSize(30)
    fill("black")
    textAlign(CENTER)
   // text("Bucket 1 filled",displayWidth/2,displayHeight/2)
   bucket1.destroy()
    Level1State=2
    
   }

    
  }  

  if(Level1State===2){
    if(keyDown("space")){
      bucket2.x=displayWidth/2
      bucket2.y=displayHeight-100
    }
    if(keyDown("left")){
      bucket2.x-=5
    }
    if(keyDown("right")){
      bucket2.x+=5
    }
    
    if(rainGroup.isTouching(bucket2)){
      rainGroup[0].destroy()
      score+=5
    }
   if(score===55){
    textSize(30)
    fill("black")
    textAlign(CENTER)
   // text("Bucket 2 filled",displayWidth/2,displayHeight/2)
   bucket2.destroy()
    Level1State=3
    
   }

    
  }  
  if(Level1State===3){
    if(keyDown("space")){
      bucket3.x=displayWidth/2
      bucket3.y=displayHeight-100
    }
    if(keyDown("left")){
      bucket3.x-=5
    }
    if(keyDown("right")){
      bucket3.x+=5
    }
    
    if(rainGroup.isTouching(bucket3)){
      rainGroup[0].destroy()
      score+=5
    }
   if(score===55){
    textSize(30)
    fill("black")
    textAlign(CENTER)
    //text("Bucket 3 filled",displayWidth/2,displayHeight/2)
    bucket3.destroy()
    gameState="Level2-Intro"
    
   }
  
  }    
}


}
function rain(){
  if(frameCount%50===0){
   r=createSprite(random(displayWidth/2-300,displayWidth/2+300),50,10,10)
   r.velocityY=8
   r.addImage(drop)
   r.scale=0.2
   r.lifetime=1000
   rainGroup.add(r)
  }
}