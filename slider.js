const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let sliderNumber =1;
let length = images.length;

for (let i =0; i<length; i++){
    const div =document.createElement("div");
    div.className="button";
    bottom.appendChild(div)
}
const buttons =document.querySelectorAll(".button")
buttons[0].style.backgroundColor="white"

const resetBg =()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent"
    })
}

buttons.forEach((button,i)=>{
    button.addEventListener("click", ()=>{
    slider.style.transform= `translateX(-${i*800}px)`
    resetBg();
    button.style.backgroundColor="white"
    sliderNumber= i + 1
    })
})

const changeColor = () => {
    resetBg();
    buttons[sliderNumber-1].style.backgroundColor="white"
}

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${sliderNumber*800}px)`
    sliderNumber++
    changeColor()
}
const getFirstSlider =()=>{
    slider.style.transform = `translateX(-${0}px)`
    sliderNumber=1
    changeColor()
}
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(sliderNumber-2)*800}px)`
    sliderNumber--
    changeColor()
    }
const getLastSlide = () =>{
    slider.style.transform = `translateX(-${(length-1)*800}px)`
    sliderNumber=length
    changeColor()
}

right.addEventListener("click", ()=>{
    sliderNumber < length ? nextSlide() :getFirstSlider()
})

left.addEventListener("click", ()=>{
    sliderNumber > 1 ? prevSlide() : getLastSlide()
})

