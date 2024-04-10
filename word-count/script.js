
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{

    e.preventDefault();

     const text = document.querySelector('#value').value;
        const lett = document.querySelector('#lett')
        const word = document.querySelector('#word');


        let letters =  countLetters(text);
        let words = countWords(text);

        const letterEle = document.createElement('p');
        letterEle.textContent = `Letter count is ${letters} and word count is ${words}`;
        
        const box = document.querySelector('.box');

        box.appendChild(letterEle);

        


}, false)


function countLetters(text){

    let Myarr = Array.from(text);
    let count = 0

    Myarr.forEach((i)=>{
        if(!(i === " ")){
            count++;
        }
    })

    return count;
    
    

}



function countWords(text){

    let Myarr = Array.from(text);
    let count = 1;

    Myarr.forEach((i)=>{
        if((i === " ")){
            count++;
        }
    })

    return count;


}




