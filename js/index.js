let bar = document.getElementById('bar');
const cl = ()=>{
    if(bar.style.height==="100vh"){
        bar.style.height="0"
        bar.removeChild('div')
    }
    else{
        bar.style.height="100vh"
        bar.appendChild(document.createElement('div'))

    }
}