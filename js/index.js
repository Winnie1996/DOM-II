// Your code goes here

// #1
const paragraphColor = document.querySelectorAll("body p")
// console.log(paragraphColor)

paragraphColor.forEach(function(paragraph){
    paragraph.addEventListener("mouseenter", function(event){
        event.target.style.color = "teal"
        //this.style.color also works'
        setTimeout(function(){
            event.target.style.color = ""
        },700)
})
})

//#2
paragraphColor.forEach(function(paragraph){
paragraph.addEventListener("mouseout", function(event){
    event.target.style.color = "orange"
    setTimeout(function(){
        event.target.style.color = ""
    },700)
})
})

// #3
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



// #4
const imageEnlarge = document.querySelector(".intro img:first-child")
// console.log(imageEnlarge)
let scale = 1;

imageEnlarge.addEventListener("wheel", function(event){
    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    imageEnlarge.style.transform = `scale(${scale})`;
})




// #5
window.addEventListener('load', function(event){
    console.log('welcome to the loaded page');
  });



// #6
const imgQuality = document.querySelector(".img-content img:first-child")
// console.log(imgQuality)

imgQuality.addEventListener('dblclick',function(event){
    event.target.style.border = '10px solid gold'
},true)

const h1 = document.querySelector('h1')


// #7
h1.addEventListener('mousedown', function(event){
    h1.textContent = 'Welcome To The Bus Enjoy The Ride'
})



//#8 9 and 10
const header2 = document.getElementsByTagName('h2');
console.log (header2)

header2[0].addEventListener('mouseover', (event) => {
   header2[0].style.fontSize = "8rem"
   header2[0].style.fontWeight = '4rem'
   header2[0].style.color = 'magenta'
})

header2[1].addEventListener('mousemove', (event) => {
    header2[1].style.fontWeight = '8rem'
    header2[1].style.fontSize = '10rem'
    header2[1].style.color = 'pink'
})

header2[2].addEventListener('mousemove', (event) => {
    header2[2].style.fontWeight = '8rem'
    header2[2].style.fontSize = '10rem'
    header2[2].style.color = 'purple'
})

header2[2].addEventListener('mousemove', (event) => {
    header2[3].style.fontWeight = '8rem'
    header2[3].style.fontSize = '10rem'
    header2[3].style.color = 'purple'
})
