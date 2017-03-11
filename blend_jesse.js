
var p1 = 2;
var p2 = 20;
var p3 = 3;
var p4 = 128;
var p5 =  345;
var p6 =  3;

function setup() {
$p.size(600, 600);
}
$p.setup = setup;

function draw() {
$p.background(360);
  wave1();    wave2();    $p.noStroke();
  $p.colorMode($p.HSB, 360, 100, 100);
  $p.fill(93);
     var s =  "Press 'a' to randomize";
  var s2 =  "Press 's/d' to adjust hues";

  $p.text(s, 12, 18);
  $p.text(s2, 12, 35);
}
$p.draw = draw;

function wave1() {
for (var i =  1;  i <16;  i= i+.1) {
for (var j =  1;  j < 15;  j= j+3) {
$p.pushMatrix();
      $p.fill(300, 100, 100);
             $p.translate(93 + i * 25, 108 + j * 25);

                    var ratio =  (i*894  + j*10)/49.0;
      var angle =  p1*$p.sin($p.millis() / 772.5 +  ratio * ($p.PI/p3)) * $p.PI/p3;
      var b =  44*$p.sin(angle);

      $p.rectMode($p.CORNER);
      $p.rect(0, 22, 1, b);               $p.popMatrix();
}
}
}
$p.wave1 = wave1;

function wave2() {
for (var i =  0;  i <15;  i= i+.1) {
for (var j =  0;  j < 15;  j= j+1) {
$p.pushMatrix();
      $p.fill(p5, 100, 300);
             $p.translate(120 + i * 25, 110 + j * 25);
                    var ratio =  (i*10  + j*10)/49.0;
      var angle =  p1*$p.sin($p.millis() / 800.0 +  ratio * ($p.PI/p3)) * $p.PI/p3;
      var b =  -30*$p.cos(angle);

      $p.rectMode($p.CORNER);
      $p.ellipse(0, 22, 1, b);
      $p.popMatrix();
}
}
}
$p.wave2 = wave2;

function keyPressed() {
if ($p.key==(new $p.Character('a'))) {
p1= $p.random(1, 5);
    p2= $p.random(10, 30);
    p3= $p.random(1, 3);
}
  if ($p.key==(new $p.Character('d'))) {
p4= p4+10;
    p5= p5+10;
}

  if ($p.key==(new $p.Character('s'))) {
p4= p4-10;
    p5= p5-10;
}

  if ($p.key==$p.ENTER) {
$p.fill(360);
    $p.rect(0, 0, 200, 60);
}
}
$p.keyPressed = keyPressed;
