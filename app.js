// let a = 10;
// let b = "hello";

// // console.log("hello world");

// // console.log(a);

// let c = 25;

// // console.log(a + c);

// let d = prompt("enter the value of d")
// i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

let heading = document.querySelector(".heading");

heading.addEventListener("toggle", () => {
  heading.style.backgroundColor = "red";
});

let paraColorChange = document.querySelector("p");

paraColorChange.addEventListener("mouseover", () => {
  paraColorChange.style.color = "red";
});
