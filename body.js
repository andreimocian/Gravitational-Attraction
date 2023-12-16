class Body {
    constructor(distSun, r, mass, initvel, color){
        this.mass = mass;
        this.radius = distSun != 0? r * 100: r;
        this.position = createVector(distSun, 0);
        this.velocity = initvel;
        this.acceleration = createVector(0, 0);
        this.color = color;
        this.g = 0.918;
    }

    attract(mover, timeScale) {
        let force = p5.Vector.sub(mover.position, this.position);
        let distance = force.mag();
        let strength = (this.g * this.mass * mover.mass) / (distance * distance) * 6.67408E-20 * timeScale * timeScale;
        force.setMag(strength);
        
        this.applyForce(force);
        mover.applyForce(force.mult(-1));
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update(timeScale) {
        let scaledVel = p5.Vector.mult(this.velocity, timeScale);
        scaledVel.add(this.acceleration);
        this.velocity = p5.Vector.div(scaledVel, timeScale);
        this.position.add(scaledVel);
        this.acceleration.set(0, 0);
    }

    display(scale) {
        stroke(0);
        fill(this.color);
        ellipse(this.position.x/scale/10, this.position.y/scale/10, 2 * this.radius/scale);
    }
}