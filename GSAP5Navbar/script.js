var menu=document.querySelector("#nav i");

var cross=document.querySelector("#full i");

const tl = gsap.timeline();

tl.to("#full",{
    right:0,
    duration:0.5, 
})
tl.from("#full h4",{
    x:150,
    duration:0.6,
    stagger:0.28,
    opacity:0
})
tl.from("#full i",{
opacity:0,
})

//it is used to pause the timeline
tl.pause();

menu.addEventListener("click",()=>{
    //whenever we click on this the timeline will start working 
    tl.play()
})

cross.addEventListener("click",()=>{
    //it will reverse the timeline
    tl.reverse();
})