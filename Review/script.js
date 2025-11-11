const clicked = click =>{

    const numbers = Array.from(document.querySelectorAll('.number'))
    numbers.forEach(num => num.classList.remove('clicked'))
    let  rateing;
    for (const num of numbers) {
        num.classList.add('clicked')
        if (num === click) {
            rateing = num.textContent
            console.log(rateing)
            break;
        }
    }
     
if(rateing == 1){
    console.log("ok its working")
}
 
}

function submit() {
    window.location.href = "./greating.html"

     
}

