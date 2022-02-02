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