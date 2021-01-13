function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.health = 100;
    this.name = name

    this.showStrength = function(){
        return strength;
    }

    this.sayName = function (){
        console.log('My name is ' + this.name)
    }
    this.showStats = function (){
        console.log('Ninja name: ' + this.name + ', strength: ' + strength + ', speed: ' + speed + ', health: ' + this.health)
    }
    this.drinkSake = function (){
        this.health += 10;
    }
    this.punch = function(anotherNinja){
        if (anotherNinja instanceof Ninja) {
            console.log(anotherNinja.name + ' was punched by ' + this.name + ' and lost 5 Health!')
            anotherNinja.health -= 5;

        } else {
            console.log('not a ninja class')
        }
    }
    this.kick = function(anotherNinja){
        if(anotherNinja instanceof Ninja){
            var lostHealth = anotherNinja.showStrength() * 15
            console.log(anotherNinja.name + ' was kicked by ' + this.name + ' and lost ' + lostHealth + ' Health')
            anotherNinja.health -= anotherNinja.showStrength() * 15

        } else {
            console.log('not a ninja class')
        }
    }


}

var ninja1 = new Ninja('Emad');
var ninja2 = new Ninja('Sam');
// ninja1.sayName()

ninja1.punch(ninja2)
ninja1.kick(ninja2)
ninja2.showStats()
