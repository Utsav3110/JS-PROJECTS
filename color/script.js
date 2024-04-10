
var rect = document.querySelector(".center");


rect.addEventListener("mousemove", (details) =>{

    var reactanglelocation = rect.getBoundingClientRect();

   var insiderec = details.clientX - reactanglelocation.left;

   if(insiderec < reactanglelocation.width / 2 ){
      var redcolor = gsap.utils.mapRange(0 ,  reactanglelocation.width / 2  , 255 , 0 , insiderec);
   
      gsap.to(rect , {
        backgroundColor : `rgb(${redcolor},0,0)`,
        ease : Power4,
       
      });  
   }
   else{
    var bluecolor = gsap.utils.mapRange( reactanglelocation.width / 2 ,  reactanglelocation.width, 0 , 255 , insiderec);
      gsap.to(rect , {
        backgroundColor : `rgb(0,0,${bluecolor})`,
        ease : Power4,
      });  
   }

});

rect.addEventListener("mouseleave", () =>{
    gsap.to(rect ,{
        backgroundColor : "white",
    });
})
