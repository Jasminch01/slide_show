const slideShowElement = document.querySelectorAll(".slideshow-element");

console.log(slideShowElement);

let countElements = 1;

setInterval(() => {
    countElements ++;
    let currentElements = document.querySelector(".current");

    currentElements.classList.remove("current");

    if (countElements>slideShowElement.length){
        slideShowElement[0].classList.add("current")
        countElements = 1;
    }else{
        currentElements.nextElementSibling.classList.add("current");
    }
   
    
}, 2000);