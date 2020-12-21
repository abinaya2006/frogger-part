var score=0
var lives=5
var time=100

function preload(){
 f=loadImage("frogger1.png")
 fd=loadImage("frogger4.png")
 frri=loadImage("frogger2.png")
 fl=loadImage("frogger3.png")
  car1=loadImage("cars1.png")
  car2=loadImage("cars3.png")
  car3=loadImage("cars2.png")
  snake=loadImage("snake.png")
  cat=loadImage("cat.png")
  dest=loadImage("desti.jpg")
  fire=loadImage("fire ball.png")
 
}

function setup(){
  createCanvas(850,560)

  
  wat=createSprite(400,170,2000,180)
  wat.shapeColor="#F6C7A3"

  land=createSprite(400,100,2000,100)
  land.shapeColor="#AAA568"
 
  land2=createSprite(400,280,2000,50)
  land2.shapeColor="#AAA568"

  land3=createSprite(400,480,2000,50)
  land3.shapeColor="#AAA568"

  fr=createSprite(400,480)
  fr.addImage("frog",f)
  fr.scale=0.1
 
  loggr=new Group()
  catgr=new Group()
  snakegr=new Group()
  cargr=new Group()
  car1gr=new Group()
  car2gr=new Group()
 
}

function draw(){
  background("black")
  fr.velocityY=0
  fr.velocityX=0

  
  if (frameCount % 60 == 0 &&lives!==0 && time!==0 &&fr.y>130 ){
    time--
  }
  if(lives!==0&&fr.y>130&&time<=99){
  
  if(keyDown("UP_ARROW")&&fr.y>100){
    fr.addImage("frog",f)
   fr.velocityY=-5
   
    score=score+10
  
  }
  if(keyDown("DOWN_ARROW")&&fr.y<480){
    fr.addImage("frog",fd)
    fr.velocityY=5
  }
  if(keyDown("RIGHT_ARROW")&&fr.x<825){
    fr.addImage("frog",frri)
    fr.velocityX=5
  }

  if(keyDown("LEFT_ARROW")&&fr.x>20){
    fr.addImage("frog",fl)
    fr.velocityX=-5
  //  fr.y=465

  }}


  if(frameCount%60==0){
    car=createSprite(10,430)
    car.addImage(car1)
    car.scale=0.8
    car.velocityX=5
    cargr.add(car)
   // car.debug=true
    car.setCollider('circle',2,0,20)
  }
 if(frameCount%90==0){
    cari2=createSprite(900,397)
   cari2.addImage(car2)
   cari2.scale=0.8
    cari2.velocityX=-5
    car1gr.add(cari2)
    cari2.setCollider('circle',2,0,20)
   }
   if(frameCount%90==0){
    cari3=createSprite(10,347)
    cari3.addImage(car3)
    cari3.scale=0.8
     cari3.velocityX=5
     car2gr.add(cari3)
     cari3.setCollider('circle',2,0,20)
   }
   if(frameCount%100==0)
   {
     snakes=createSprite(10,280)
     snakes.addImage(snake)
     snakes.scale=0.08
     snakes.velocityX=5
     snakegr.add(snakes)
     
   }
   if(frameCount%50==0){
     log=createSprite(900,225,150,60)
     log.addImage(fire)
     log.scale=0.1
     log.velocityX=-5
    loggr.add(log)
  //  log.debug=true
    log.setCollider("circle",0,0,40)
   }
   if(frameCount%60==0){
     tur=createSprite(10,170)
     tur.addImage(cat)
     tur.velocityX=5
     tur.scale=0.1
     catgr.add(tur)
   //  tur.debug=true
     tur.setCollider("circle",0,0,50)
   }

  if(fr.isTouching(catgr)||(fr.isTouching(loggr))){
     fr.x=400
    fr.y=300
    if(lives!==0){
      lives=lives-1}
    score=score-100
    
  }
 
  if(fr.isTouching(snakegr)||(fr.isTouching(cargr))||(fr.isTouching(car1gr)||(fr.isTouching(car2gr)))){
    fr.x=400
    fr.y=500 ;
    if(lives!==0){
    lives=lives-1
    
    time=time-5
    
  
    }
    score=score-100


  }

  if(fr.y<150){
    bg=createSprite(200,404,3900,2990)
    bg.shapeColor="#67A79B"
    
   wn=createElement('h2')
   wn.html("YOU WON")
   wn.style('font-size', '58px');
   wn.style('color', '#4554B0');
   wn.position(650,100)

   fn=createElement('h2')
   fn.html("Thank you for guiding me to my home 🐸❤❤")
   fn.style('font-size', '38px');
   fn.style('color', "red");
   fn.position(400,250)
  }
 
 
  if(score<0){
    score=0
  }
  if(lives==0||time==0){
    
   scorecard=createSprite(200,100,5000,3000)
   scorecard.shapeColor="green"
   //textSize(30)
    
  }
  

  drawSprites()
   
  fill("white")
  textSize(70)
  text ("ⒻⓇⓄⒼⒼⓎ",200,60)
  if(lives!==0&&fr.y>130 ){
    textSize(40)
   fill ("green")
  text ("frog's home",300,110)
  textSize(40)
  fill("white")
  text("🐸: "+lives,10,550)
  text("score: "+score,300,550)
  text(time,700,550)}

  if(lives==0||time==0){
    textSize(50)
    fill("red")
    text("UNFORTUNATELY FROG DIED ",55,150)
    fill("red")
   text("𝒢𝒜𝑀𝐸 𝒪𝒱𝐸𝑅",250,250)
  
   fill("purple")
    text("YOUR SCORE : "+score,250,350)
    fill("yellow")
    text("Time left : "+time+" seconds",250,440)
  }
 
}