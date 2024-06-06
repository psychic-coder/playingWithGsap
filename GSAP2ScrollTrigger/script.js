gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }//whenever we'll use the pin property we'll put the trigger to the parent element which is in this case is the page2

})