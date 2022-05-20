
// const boxes = document.querySelectorAll("box");

// // boxes.onclick("click", console.log("ive been cliced"), false);
// // console.log("hello world")
// // console.log(boxes)
// // const myElement = document.getElementById("demo");
// // myElement.style.color = "red";
// // element.addEventListener("click", alert('clicked'), false);// Add onclick eventListener 
// // var element= document.getElementsByClassName('classname');

// boxes[0].addEventListener("click", () => {
//     console.log("ive been clicked")
// });
console.log("!!!!!!!")
const box1 = document.getElementById("box1")

let count = true;

box1.addEventListener("click", () => {
    
    if(count === true) {
        box1.style.backgroundColor = "blue";
        count = false;
    } else if(count === false) {
        box1.style.backgroundColor = "red";
        count = true;
    }
    
});

// function myFunc(a, b) {
//     return a + b;
// }

// console.log(myFunc(1, 2))
// console.log(myFunc)