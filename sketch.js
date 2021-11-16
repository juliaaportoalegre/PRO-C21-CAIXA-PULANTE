var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
   music=loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(95,580,200,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "yellow";

    bloco3 = createSprite(495,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(695,580,200,30);
    bloco4.shapeColor = "green";
  

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);

    bola.velocityX = 10;
    bola.velocityY = 10;
}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
        bola.shapeColor = "yellow";
        music.play();
    }

    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        music.pause();
        bola.velocityY = 0;
        bola.velocityX = 0;
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        music.play();
    }

    drawSprites();
}