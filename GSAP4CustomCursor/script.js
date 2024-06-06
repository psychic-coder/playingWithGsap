const main=document.querySelector("#main")
const cursor=document.querySelector("#cursor")
const imageDiv=document.querySelector("#image")

main.addEventListener("mousemove",(dets)=>{
    // the value of dets is dependent on the type of event as in this case is dets
        gsap.to(cursor,{
              x:dets.x,
              y:dets.y,
              duration:1,
              ease:"back.out(1.7)",
             
        })
})

imageDiv.addEventListener("mouseenter",()=>{
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff8a"
    })
})
imageDiv.addEventListener("mouseleave",()=>{
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})