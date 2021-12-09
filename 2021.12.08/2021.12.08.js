let string = "string"
string[0]; // => s
string[1]; // => t
string[2] = "K"; // => stking

let hi = "Hi";
hi = "h" +hi[1]; //=>hi

let str = "stringify";
str.slice(0, 5); // strin
str.slice(0,1); //s
str.slice(-4, -1); //gif

str.substring(0, 5); //string
str.substring(0, 1); //st

str.substr(2, 4); //ring
str.substr(-4, 3); //gif

let arr = ["i", "go", "home"];
delete arr[1]; //-go => ["I", undefined, "home"]
arr.splice(1, 1); //["I", "home"]

let obj = {}
obj.name = "oliver";
let objInit = {name: "oliver"};

let person = {
    name: "Dzseni",
    age: 10,
    "likes birds": true
}
delete person.age; //name:"Dzseni"
person["likes birds"];
person["name"];
person["age"];

let key = "age";
person[key] //person.age || person["age"]

let personArray = ["Dzseni", 10];
personArray[0]
personArray[1]


let dzseni = {name: "Dzseni", likesBirds: true}
let adam = { name: "Adam", likesBirds:false}
let emberek = [dzseni, adam, { name: "Peti", likesBirds: true}];
dzseni.name = "nem dzseni";
