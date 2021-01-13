function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.health = 100;
    this.name = name

    this.sayName = function (){
        console.log('My name is ' + this.name)
    }
    this.showStats = function (){
        console.log('Ninja name: ' + this.name + ', strength: ' + strength + ', speed: ' + speed + ', health: ' + this.health)
    }
    this.drinkSake = function (){
        this.health += 10;
    }

}

var ninja1 = new Ninja('Emad');
ninja1.sayName()
ninja1.showStats()
