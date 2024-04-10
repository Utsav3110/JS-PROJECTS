const form = document.querySelector("form")


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    
const height = document.querySelector("#height").value;
const weight = document.querySelector("#weight").value;



const result = document.querySelector('#results')

    

  result.innerHTML = (weight / ((height/100) ** 2)).toFixed(2);

    

})


    