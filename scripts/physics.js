var ball
var ball2

function setup() {
    createCanvas(400, 400);
    background(0);
    var diameter = int(document.getElementById("diameter").value)
    var vel = int(document.getElementById("velocity").value)
    console.log(diameter, vel)
    ball = new Ball(55,55, diameter, vel);
    ball2 = new Ball(75,75, diameter, vel);
}

function Ball(x, y, diameter, vel){
    this.x = x
    this.y = y
    this.velx = vel
    this.vely = vel
    this.diameter = diameter
    this.colour = color(random(255),random(255), random(255))
    this.draw= function() {
        fill(this.colour)
        ellipse(this.x, this.y, this.diameter, this.diameter)
    }
    this.update = function(){
        this.x = this.x + this.velx
        this.y = this.y + this.vely
        this.vely = this.vely + 9.81/60
    }
    this.collision = function(){
        if(this.y>400-this.diameter/2){
            this.vely = (-this.vely + 9.81/60) * 0.9;
            this.y += this.vely * 0.9;
        }
        if(this.x>400-this.diameter/2 || this.x <this.diameter/2){
            this.velx = -this.velx
        }
   
   
   
    }



}

function draw(){
    background(0) 
    ball.collision()
    ball.update()
    ball.draw()
    ball2.collision()
    ball2.update()
    ball2.draw()

}
function reset(){
setup()
}