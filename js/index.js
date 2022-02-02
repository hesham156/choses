let bar = document.getElementById('bar');
const cl = ()=>{
    if(bar.className==="h0"){
        bar.classList.add("h100")
        bar.classList.remove("h0")
    }
    else{
        bar.classList.add("h0")
        bar.classList.remove("h100")

        console.log()


    }
}
const encrm = ()=>{
    localStorage.setItem('card', JSON.parse(localStorage.getItem('card'))+1)
    JSON.parse(localStorage.getItem('card'))
   

    
    console.log(JSON.parse(localStorage.getItem('card')))
}
// let d =document.createElement('div');
// let ca = document.getElementById('ca');
let nm =document.getElementById('num')
nm.innerHTML=JSON.parse(localStorage.getItem('card'));
window.addEventListener('click',()=>{
    // d.appendChild(document.createTextNode(JSON.parse(localStorage.getItem('card'))));
    // bar.appendChild(d);
    nm.innerHTML=JSON.parse(localStorage.getItem('card'));

})
// ca.addEventListener('click',()=>{
//     // window.location.reload();
// })

