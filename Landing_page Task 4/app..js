gsap.from("h1",{
    y:30,
   duration:1,
   opacity: 0,
   delay:1,
   stagger: 0.4,
   repeat: -1,
   yoyo : true 
    
})   


// gsap.from("#page2 h1",{
       
//     x: 800,
//     duration :5,
    
//     yoyo : true,
//     // scrollTrigger:"#page2 .box"
//     scrollTrigger: {
//           trigger : "#page2 h1",
//           scroller : "body",
//         //   markers : true,
//           start : "top 50%",
//           end: "top 30%",
//           scrub: 2

//     }

    
// })

gsap.from("#page2 h3",{
       
    x: -800,
    duration :5,
    
    yoyo : true,
    // scrollTrigger:"#page2 .box"
    scrollTrigger: {
          trigger : "#page2 h3",
          scroller : "body",
        //   markers : true,
          start : "top 50%",
          end: "top 30%",
          scrub: 2

    }

    
})


gsap.from("#split span",{
    y:50,
    opacity:0,
    duration:1,
    dealy:0.5,
    repeat :-1,
    stagger:-0.40
})


