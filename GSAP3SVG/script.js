var initialPath=`M 10 100 Q 500 100 990 100`
var finalPath=`M 10 100 Q 500 100 990 100`
//the inital and the final paths are the values of the svg 


var string=document.querySelector("#string")


string.addEventListener("mousemove",(dets)=>{
    initialPath=`M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr:{
            d:initialPath
        },
        duration:0.3,
        ease:"power3.out"

    })
})
//by using the "attr" we are accessing the d attribute of the path tag and we're modifying it with the new value of the path
string.addEventListener("mouseleave",(dets)=>{
    initialPath=finalPath;
    gsap.to("svg path",{
        attr:{
            d:initialPath
        },
        duration:1.5,
        ease:"elastic.out(1, 0.2)"
    })
})
