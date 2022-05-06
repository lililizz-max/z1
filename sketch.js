//declaracion de variables

var bg,bgImg;
var jugador, shooterImg, shooter_shooting;

//funcion precargar, se alojan animaciones en variables
function preload(){
  
  shooterImg = loadImage("imagenes/2.png")
  shooter_shooting = loadImage("imagenes/3.png")

  bgImg = loadImage("imagenes/fondo.jpeg")

}

function setup() {

  //el canvas toma las dimensiones de la pantalla
  createCanvas(windowWidth,windowHeight);

  //se crea el sprite que sera el fondo
  //las instrucciones de displayWidth y displayHeight ssirven
  //para acoplar las dimensiones del esprite al tamaño de la pantalla
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  //se agrega la imagen de fondo al sprite por medio de una variable
bg.addImage(bgImg)
//ajuste de escalas de la animacion
bg.scale = 1.1
  

//cracion del esprite del jugador
jugador = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
//animacion del jugador 
jugador.addImage(shooterImg)
//ajuste de escala
   jugador.scale = 0.3
   jugador.debug = true

   //objeto detector de colision
   jugador.setCollider("rectangle",0,0,300,300)


}
//funcion dibujar 
function draw() {

  //tono de fondo en cero
  background(0); 



//estructuras de seleccion para determinar movimientos del objeto
if(keyDown("UP_ARROW")||touches.length>0){
  jugador.y = jugador.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 jugador.y = jugador.y+30
}


//cambio de imagen cuando el jugador presiona espacio
if(keyWentDown("space")){
 
  jugador.addImage(shooter_shooting)
 
}

//cambio de imagen cuando espacio deja de ser presionado
else if(keyWentUp("space")){
  jugador.addImage(shooterImg)
}
// llamada de funcion "dibujar sprites"
drawSprites();

}
