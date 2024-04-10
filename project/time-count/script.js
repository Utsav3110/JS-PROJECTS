const button = document.querySelector('.button');


button.addEventListener('click',(e)=>{

    setInterval(function(){

        let date = new Date();

        button.innerHTML = date.toLocaleTimeString();

        
    }, 1000);


}, false)   

