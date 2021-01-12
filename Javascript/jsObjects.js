/*
// challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function namesCohorts(arr){
    var obj = {};
    for (let i=0; i<arr.length; i++){
        console.log('Name: ' + arr[i].name + ',' + 'Cohort: ' + arr[i].cohort)
    }
    
}

console.log(namesCohorts(students));

*/






/*
// challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


function namingCharactersCount(obj){
    var joinedName;
    for (var field in obj){
        console.log(field.toUpperCase())
        for(var i=0; i<obj[field].length;i++){
            joinedName = obj[field][i].first_name + obj[field][i].last_name
            console.log(obj[field][i].last_name + ', ' + obj[field][i].first_name + ' - ' + joinedName.length)
        }
    }

}

console.log(namingCharactersCount(users));
*/


