// Your code goes here
const paragraphColor = document.querySelectorAll("body p")
// console.log(paragraphColor)

paragraphColor.forEach(function(paragraph){
    paragraph.addEventListener("mouseenter", function(event){
        event.target.style.color = "teal"
        //this.style.color also works'
        setTimeout(function(){
            event.target.style.color = "black"
        },700)
})
})


const titleColor = document.querySelectorAll("body")
// console.log(h2Color)

titleColor.forEach(function(headerColor){

    headerColor.addEventListener("keydown",function(event){

        if (event.keyCode === 16){

            const h2Color = document.querySelectorAll("body h2")

            h2Color.forEach(function(headerColor2){

                headerColor2.style.color = "purple"

                setTimeout(function(){
                    headerColor2.style.color = "black"
                },700)

            })
        }
    })
})








const imageEnlarge = document.querySelector(".intro img:first-child")
console.log(imageEnlarge)
let scale = 1;

imageEnlarge.addEventListener("wheel", function(event){
    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    imageEnlarge.style.transform = `scale(${scale})`;
})


    



