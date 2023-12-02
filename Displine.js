//Discpline Day-1
console.log("This is nothing but a closer concept in javascript");
function abc(){
    let x=9;
    const name1="Govind";
    return function (){
console.log(x);
    }
}
let ans=abc();
ans();
alert("Hey Welcome back Mr Govind Thakur in javaScript feild");
name1="Govind";

// Discpline Day-2
console.log("Diffrence between null and undefined in javascript");
//Null is nothing but if your are finding anything at somewhere and you are not able to find it then that time the value is called "Null"

//Undefined
//let's take an example
var a;
console.log(a);//Output undifined;

//Discipline Day-3
/*Do you Understand DOM
So can you please define me what is the difference between Event Bubbling and Event Capturing*/

//1)EventBubbling
document.querySelector(".parent")
.addEventListener("click",function(){
    alert("Done")
});