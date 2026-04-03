import kaplay from "kaplay";
const k =kaplay({
  width: 1000,
  height:400,
});

k.loadBean();
k.setGravity(1500);

const player= k.add([
  k.sprite("bean"),
  k.pos(k.center()),
  k.area(),
  k.body(),
  k.offscreen(),
])

player.onKeyPress("space", ()=>{
  if(player.isGrounded())player.jump();
})

player.onExitScreen(()=>{
  k.go("gameover");
})
k.scene("gameover",()=>{
  k.add([
    k.text("GAME OVER!"),
    k.pos(k.center()),
  ])
}
)
k.add([
  k.rect(k.width(), 300), k.pos(0, 400),
  k.area(),
  k.body({isStatic:true}),
  k.outline(3),
]);
let counter=0;
const counterUI=k.add([k.text("0")]);
k.loop(1, ()=>{
  counter++;
  counterUI.text=counter;
  const speeds =[300,500,800];
  const currentSpeed =speeds[Math.floor(Math.random()*speeds.length)];

  k.add([
    k.rect(50,50),
    k.pos(800,350),
    k.area(),
    k.body(),
    k.outline(3),
    k.move(k.vec2(-1,0),currentSpeed),


  ])
})
