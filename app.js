const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');

let input = "";


btns.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let target = e.target;
        //console.log(target.innerHTML);

        if (target.className === 'num'  || target.className ==='op') { 
          input += target.innerHTML;
          display.textContent =input;
          console.log(display.textContent)  ;
        }
        else if (target.className === 'dot'){
          input += target.innerHTML;
          display.textContent =input;
          console.log(display.textContent)  ;
        }
        else if (target.className === 'del'){
          if  (display.textContent.length >1){
          input =display.textContent.slice(0,-1);
          display.textContent =input;
          }else{
            display.textContent = '0';
          }
        }
        else if (target.className === 'clear'){
          input ="";
          display.textContent ="0";
          console.log(display.textContent)
        }
        else{
          try{
            display.textContent =eval(input);
          }catch(err){
            //
            display.textContent="!-Invalid Input-!";
            };
            console.log(eval(input))  ;
        }
    })
});