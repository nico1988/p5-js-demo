//speed and on variables
var speed = 2.2;
var on = false;

function setup() {
    createCanvas(500, 500);
}

//x-axis and green variables
var car = {
    x: 0,
    g: 250
};

//sky colour
var sky = {
    col1: 255,
    col2: 220,
    col3: 0,
    col4: 150
};

function draw() {
    //mapping for the colour of the sky and the car
    //as it travels along the x-axis
    sky.col1 = map(car.x, 0, 500, 255, 0);
    sky.col2 = map(car.x, 0, 500, 220, 0);
    sky.col3 = map(car.x, 0, 500, 0, 255);
    sky.col4 = map(car.x, 0, 500, 150, 80);
    car.g = map(car.x, 0, 500, 250, 0);

    //the sky background changing as the car travels
    background(0, sky.col2, sky.col1);

    //the stars
    noStroke();
    fill(0, 220, 255, 140);
    ellipse(150, 80, 9, 8);
    ellipse(280, 60, 8, 9);
    ellipse(50, 180, 9, 9);
    ellipse(320, 150, 8, 8);

    //the sun or moon
    fill(255, 255, sky.col3);
    ellipse(50, 50, 60, 60);

    //concrete
    fill(sky.col4);
    rect(0, 250, 499, 250);

    //the car itself
    fill(0, car.g, 0);
    rect(car.x, 198, 110, 50, 20);
    fill(50);
    ellipse(car.x, 250, 40, 40);
    ellipse(car.x + 110, 250, 40, 40);

    //boolean statement for the car turning around
    if (car.x + 110 >= width || car.x < 0) {
        speed = speed * -1;
    }

    //speed of the car
    car.x = car.x + speed;

    //Sun button which sets everything black
    if (on) {
        background(0);
        fill(255, 255, 0);
        ellipse(50, 50, 60, 60);
    }
}

//If mouse is pressed on the Sun, it turns everything
//black and visa versa
function mousePressed() {
    if (mouseX >= 20 & mouseX < 80 && mouseY >= 20 && mouseY < 80) {
        on = !on;
    }
}
