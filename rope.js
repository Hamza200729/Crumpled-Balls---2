class Rope{
  
    constructor(body1,body2){
        
    
        var options = {
            bodyA:body1,
            bodyB:body2,
           
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope)
    }

    display(){
        strokeWeight(5);
        stroke("red");
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
  

    }

}