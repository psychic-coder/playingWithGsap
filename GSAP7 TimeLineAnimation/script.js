function page1Animation(){
    var tl=gsap.timeline()
tl.from("nav h1,nav h4,nav button",{
   y:-40,
   opacity:0,
   delay:1,
   duration:0.7,
   stagger:0.15,
    ease:"bounce.out"
})


tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5,

},"-=0.3")
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
})
tl.from (".center-part1 button",{
    opacity:0,
    duration:0.4
})
tl.from (".center-part2 img",{
    opacity:0,
    duration:0.5
},"-=1")//the last "-=1" means that this animation will run in timeline but will start 1sec before

tl.from (".section1bottom img",{
    opacity:0,
    y:30,
    stagger:.15,
    duration:0.6
})
}
page1Animation();





function page2Animation(){

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
});
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5,
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim1") //if we want to animations to work to gether we give the same name to both of them
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1,
},"anim1")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1,
},"anim2")
}

page2Animation();