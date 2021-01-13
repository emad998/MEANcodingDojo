/*
// question 1
var hello;
console.log(hello);
// undefined
var hello = 'world';
*/

/*
// question 2
var needle = 'haystack';
function test(){
	var needle = 'magnet';
	console.log(needle);
}
test();
// haystack
*/



/*
// question 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// 'only okay'
*/


/*
// question 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
*/


/*
// question 5
var mean;
mean();
// not a function
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
*/


/*
// question 6
var genre;
console.log(genre);
// undefined
var genre = "disco";
rewind();
function rewind() {
    var genre;
	genre = "rock";
    console.log(genre);
    // rock
	var genre = "r&b";
    console.log(genre);
    // "r&b"
}
console.log(genre);
// 'disco'
*/

/*
question 7
var dojo;
dojo = "san jose";
console.log(dojo);
// san jose
function learn() {
    var dojo;
	dojo = "seattle";
    console.log(dojo);
    // seattle
	var dojo = "burbank";
    console.log(dojo);
    // burbank
}
learn();

console.log(dojo);
// san jose
*/


/*
// question 8
console.log(makeDojo("Chicago", 65));
// 
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
    // cannot reassign a const
        }
        return dojo;
}
*/