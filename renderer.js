let scaleSlider;
let attractor, speed = 20000;
let bodies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  bodies[0] = new Body(0, 695700, 1.9885E30, createVector(0, 0), color(255, 255, 0)); //Sun
  bodies[1] = new Body(46002000, 2439.7, 3.3011E23, createVector(0, 58.98), color(100, 100, 100)); //Mercury
  bodies[2] = new Body(107476000, 6051.8, 4.8675E24, createVector(0, 35.26), color(255, 255, 255)); //Venus
  bodies[3] = new Body(147092000, 6378.1, 5.9724E24, createVector(0, 30.29), color(60, 30, 255)); //Earth
  bodies[4] = new Body(206617000, 3389.5, 6.4171E23, createVector(0, 26.5), color(193, 68, 14)); //Mars
  bodies[5] = new Body(740522000, 69911, 1.89819E27, createVector(0, 13.72), color(216, 202, 157)); //Jupiter
  bodies[6] = new Body(1352555000, 58232, 5.6834E26, createVector(0, 10.18), color(227,224,192)); //Saturn
  bodies[7] = new Body(2741302000, 25362, 8.6813E25, createVector(0, 7.11), color(198,211,227)); //Uranus
  bodies[8] = new Body(4444449000, 24622, 1.02413E26, createVector(0, 5.50), color(133,173,219)); //Neptune

  scaleSlider = createSlider(10000,1200000,50000,20000);
  scaleSlider.parent("#scaleSlider");
}

function draw() {
  background(0);

  let scale = scaleSlider.value();

  translate(width / 2, height / 2);

  for(let i = 0; i < bodies.length - 1; i++)
  {
    for(let j = i + 1; j < bodies.length; j++)
    {
      bodies[i].attract(bodies[j], speed);
    }
  }

  for(let i = 0; i < bodies.length; i++){
    bodies[i].update(speed);
  }

  for(let i = 0; i < bodies.length; i++){
    bodies[i].display(scale);
  }
}