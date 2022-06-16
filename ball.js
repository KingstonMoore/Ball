class Ball{
    constructor(x,y,r){
        var prop = {restitution: 1}
        this.body = Bodies.circle(x,y,r, prop)
        World.add(world,this.body)
        this.r = r
    }
    display(){
        ellipse(this.body.position.x, this.body.position.y, this.r)
    }
}