const body = document.querySelector('body')
const start = document.getElementById('start')
const stop = document.getElementById('stop')


start.addEventListener('click', (e)=>{

    const changer = setInterval(()=>{

        body.style.backgroundColor = '#' + myColor()

    }, 1000);


    stop.addEventListener('click', (e)=>{

        clearInterval(changer)
    
    }, 1000)

   

}, false);


function myColor(){
    let hex = '0123456789abcdef'
    let color = ''

    for(let i = 0 ; i < 6 ; i++){
        color += (hex[Math.floor(Math.random() * 16)]); 
    }
   

    console.log(color);
    return color;

}