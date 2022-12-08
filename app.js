                        // HTMLdan chaqirish
// 1 way id  
// const registerBtn = document.getElementById("register_btn");
// console.log(registerBtn);
// // 2 way id
// const registerBtn2 = document.querySelector("#register_btn")
// console.log(registerBtn2);
// 3 way class
// const heading = document.querySelector(".heading")
// console.log(heading);
// 4 way attribute
// const passwordInput = document.querySelector('input[type="password"]');
// console.log(passwordInput);
// 5 way tagname
// const spanEl = document.querySelector("span");
// console.log(spanEl);
// 6 way data attribute
// const spanEl = document.querySelector('[data-text="span"]');
// console.log(spanEl);

              // HTMLga style va class berish
// const btnEl = document.querySelector("#btn");
// 1 way
// btnEl.style.backgroundColor = "green";
// btnEl.style.color = "white";
// 2 way
// btnEl.style = "background-color: yellow; color:red";
// 3 way
// btnEl.className = "class"

              // bosing
// btnEl.addEventListener("click", () =>{
//   console.log("working");
// })
// btnEl.addEventListener("click", () =>{
//   if(document.body.style.backgroundColor == "white"){
//     document.body.style.backgroundColor = "black"
//   }
//   else{
//     document.body.style.backgroundColor = "white"
//   }
// })
// btnEl = addEventListener("click", (e) => {
//   console.log(e);
// })

//camelCase
//lowercase
//UPPERCASE
//PascaleCase
//snake_case      x

                      //Homework
// const burgerItems = document.querySelector(".burgerItems")

// savol: if else faqat idini oladimi, ya'ni if(id) yozsa bo'ladimi?
burgerMenu.addEventListener("click", () =>{
  if (burgerItems.style = "margin-left: -6%; border: solid;") {
    burgerItems.style = "margin-left: 0.1px; border: none;"
  } 
})

burgerMenu.addEventListener("click", () =>{
  if (burgerMenu.style = "display:block") {
    burgerMenu.style = "display:none"
  }
})

let qrcodeItem = document.querySelector(".qrcodeItem")
burgerMenu.addEventListener("click",() => {
  if (qrcodeItem.style = "display:none") {
    qrcodeItem.style = "display:inline"
  }
})

// xmark.addEventListener("click", () =>{
//   if (qrcodeItem.style = "display:inline") {
//     qrcodeItem.style = "display:none"
//   }
// })

burgerMenu.addEventListener("click", () =>{
  if (xmark.style = "display:block") {
    xmark.style = "display:inline"
  }
})

xmark.addEventListener("click", () =>{
  if (xmark.style = "display:inline"){
    xmark.style = "display:none"
  }
})

xmark.addEventListener("click", () =>{
  if (burgerItems.style = "margin-left: 6%") {
    burgerItems.style = "margin-left: -6%"
  }
})

xmark.addEventListener("click", () =>{
  if (burgerMenu.style = "display:block"){
    burgerMenu.style = "display:inline"
  }
})

burgerMenu.addEventListener("click", () => {
  if (qor.style = "autoplay") {
    qor.style = "autoplay"
  }
})