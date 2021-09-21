class Paper{
    consturctor(x,y,radius){
        var paper_options = {restitution:0.3,isStatic:false,density:1.2,friction:0}
        this.x = x
        this.y = y
        this.radius = radius
        this.Paper = Bodies.circle(this.x,this.y, this.radius, paper_options)
        World.add(world,this.Paper)
    }

    display(){
    
        push()
        ellipse(this.x,this.y,this.radius)
        pop()




    }
    

}