let inputValue=document.querySelector('.input-value');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.innerHTML=="="){
            string=eval(string);
            inputValue.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            inputValue.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            inputValue.value=string;
        }
        else{
            string += e.target.innerHTML;
            inputValue.value=string;
        }
    })
})