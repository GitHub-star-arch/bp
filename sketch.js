var player, playerimg,playerimgatt, zombhea=100,zombimg,zombie,fireimg,fireball, cooldown = 0, coolin,map,mapimg,playerhea=20;
function preload() {
    playerimg=loadImage("ninja2.png");
    playerimgatt=loadImage("ninja.png");
    backgroundimg=loadImage("l.jpg");
    zombimg=loadImage("unnamed1.png");
    fireimg=loadImage("download3.png");
    mapimg=loadImage("map.png");
}
function setup() {
    createCanvas(displayWidth,displayHeight-200);
    zombie=createSprite(1700,640,200,200);
    zombie.addImage(zombimg)
    zombie.velocityX=3;
    player = createSprite(200,670,400,400);
    player.addImage(playerimg);
    player.scale=1/2;
    map=createSprite(300,300,200,200);
    map.addImage(mapimg);
    map.visible=false
}
function draw() {
    if (player.y<670) {
    player.y = player.y + 5
    }
    coolin=cooldown;
    cooldown=cooldown+0.05;
    background(backgroundimg);
    if (cooldown>100 && cooldown<150) {
       text("cooldown Ready",200,200);0
    }
    if(zombie.x<=0 || zombie.x>=1800){
        zombie.velocityX=zombie.velocityX*-1;
    }
    if (zombie.isTouching(player)) {
        playerhea=playerhea-1;
    }
    if(playerhea===0){
        player.destroy();
    }
    if (keyDown("up")) {
        player.y=player.y-70
    }
    if (keyDown("right")) {
        player.x=player.x+70
    }
    if (keyDown("left")) {
        player.x=player.x-70
    }
    if (keyDown("space")) {
      player.addImage(playerimgatt);
      if (player.isTouching(zombie)) {
      zombhea=zombhea-10;
      }
    }
    if (zombhea<=0) {
      zombie.destroy();
    }
    if (keyDown("m")) {
        map.visible=true
    }
    if (keyDown("e") && cooldown>=100) {
      cooldown=0;
      player.addImage(playerimgatt);
      fireball = createSprite(player.x,player.y,10,10);
      fireball.addImage(fireimg);
      fireball.velocityX=10;
        zombhea=zombhea-30;
    }
    if (keyWentUp("e")) { 
        player.addImage(playerimg);
    }
    if (keyWentUp("space")) {
        player.addImage(playerimg);
    }
    
    if (keyWentUp("m")) {
        map.visible=false
    }
    text("coolin: "+Math.round(coolin),100,100);
    text("zomhea: "+Math.round(zombhea),200,100);
    drawSprites();
}