/* Add custom Js code below */ 
if(localStorage.getItem('target')===null){
localStorage.setItem('target',0)
}
var theElm = document.createElement('div')

if(JSON.parse(localStorage.getItem('target'))===0){
window.addEventListener('load',()=>{
document.querySelector('.store-home').appendChild(theElm)
theElm.classList.add('welmsg')
theElm.classList.add('welmsg')
document.querySelector('.welmsg').innerHTML=`
<div class="background background0"></div>
<div class="background background1"></div>
<div class="background background2"></div>
<div class="background background3"></div>
<div class="background background4"></div>
<div class="background background5"></div>
<div class="background background6"></div>
<div class="background background7"></div>
<div class="criterion">
  <div class="text text0">W</div>
  <div class="text text1">e</div>
  <div class="text text2">l</div>
  <div class="text text3">c</div>
  <div class="text text4">o</div>
  <div class="text text5">m</div>
  <div class="text text6">e</div>
  <div class="text text7">: )</div>
  <div class="frame frame0"></div>
  <div class="frame frame1"></div>
  <div class="frame frame2"></div>
  <div class="frame frame3"></div>
  <div class="frame frame4"></div>
  <div class="frame frame5"></div>
  <div class="frame frame6"></div>
  <div class="frame frame7"></div>
  <div class="particle particle00"></div>
  <div class="particle particle01"></div>
  <div class="particle particle02"></div>
  <div class="particle particle03"></div>
  <div class="particle particle04"></div>
  <div class="particle particle05"></div>
  <div class="particle particle06"></div>
  <div class="particle particle07"></div>
  <div class="particle particle08"></div>
  <div class="particle particle09"></div>
  <div class="particle particle010"></div>
  <div class="particle particle011"></div>
  <div class="particle particle10"></div>
  <div class="particle particle11"></div>
  <div class="particle particle12"></div>
  <div class="particle particle13"></div>
  <div class="particle particle14"></div>
  <div class="particle particle15"></div>
  <div class="particle particle16"></div>
  <div class="particle particle17"></div>
  <div class="particle particle18"></div>
  <div class="particle particle19"></div>
  <div class="particle particle110"></div>
  <div class="particle particle111"></div>
  <div class="particle particle20"></div>
  <div class="particle particle21"></div>
  <div class="particle particle22"></div>
  <div class="particle particle23"></div>
  <div class="particle particle24"></div>
  <div class="particle particle25"></div>
  <div class="particle particle26"></div>
  <div class="particle particle27"></div>
  <div class="particle particle28"></div>
  <div class="particle particle29"></div>
  <div class="particle particle210"></div>
  <div class="particle particle211"></div>
  <div class="particle particle30"></div>
  <div class="particle particle31"></div>
  <div class="particle particle32"></div>
  <div class="particle particle33"></div>
  <div class="particle particle34"></div>
  <div class="particle particle35"></div>
  <div class="particle particle36"></div>
  <div class="particle particle37"></div>
  <div class="particle particle38"></div>
  <div class="particle particle39"></div>
  <div class="particle particle310"></div>
  <div class="particle particle311"></div>
  <div class="particle particle40"></div>
  <div class="particle particle41"></div>
  <div class="particle particle42"></div>
  <div class="particle particle43"></div>
  <div class="particle particle44"></div>
  <div class="particle particle45"></div>
  <div class="particle particle46"></div>
  <div class="particle particle47"></div>
  <div class="particle particle48"></div>
  <div class="particle particle49"></div>
  <div class="particle particle410"></div>
  <div class="particle particle411"></div>
  <div class="particle particle50"></div>
  <div class="particle particle51"></div>
  <div class="particle particle52"></div>
  <div class="particle particle53"></div>
  <div class="particle particle54"></div>
  <div class="particle particle55"></div>
  <div class="particle particle56"></div>
  <div class="particle particle57"></div>
  <div class="particle particle58"></div>
  <div class="particle particle59"></div>
  <div class="particle particle510"></div>
  <div class="particle particle511"></div>
  <div class="particle particle60"></div>
  <div class="particle particle61"></div>
  <div class="particle particle62"></div>
  <div class="particle particle63"></div>
  <div class="particle particle64"></div>
  <div class="particle particle65"></div>
  <div class="particle particle66"></div>
  <div class="particle particle67"></div>
  <div class="particle particle68"></div>
  <div class="particle particle69"></div>
  <div class="particle particle610"></div>
  <div class="particle particle611"></div>
  <div class="particle particle70"></div>
  <div class="particle particle71"></div>
  <div class="particle particle72"></div>
  <div class="particle particle73"></div>
  <div class="particle particle74"></div>
  <div class="particle particle75"></div>
  <div class="particle particle76"></div>
  <div class="particle particle77"></div>
  <div class="particle particle78"></div>
  <div class="particle particle79"></div>
  <div class="particle particle710"></div>
  <div class="particle particle711"></div>
</div>`
})
setTimeout(()=>{
theElm.style.display="none"
},7000)
localStorage.setItem('target',1)
}else{
console.log("done")
}
setTimeout(()=>{
let h = document.querySelectorAll('.button-more');
for(let i =0;i<=h.length;i++){
h[i].dataset.front=h[i].innerText
h[i].dataset.back=h[i].innerText
h[i].innerText=""

}
},2000)

function td (clas){
setTimeout(()=>{
let h = document.querySelectorAll(clas);
for(let i =0;i<=h.length;i++){
let span = document.createElement('span')
span.dataset.front=h[i].childNodes[1].innerText
span.dataset.back=h[i].childNodes[1].innerText
h[i].childNodes[1].innerText=""
h[i].appendChild(span);
}
},2000)
}
td('.section--title')



document.querySelectorAll('a.product-add.add_to_cart_btn').forEach((elm)=>{elm.onclick=()=>{
var cel = document.createElement('div')
cel.classList.add('myanima')
cel.innerHTML=`
<lord-icon
    src="https://cdn.lordicon.com/tqywkdcz.json"
    trigger="loop"
    style="width:250px;height:250px">
</lord-icon>`
elm.appendChild(cel)
setInterval(()=>{cel.remove()},3000)
}})
var scri = document.createElement('script')
scri.src="https://cdn.lordicon.com/fudrjiwc.js"
document.head.appendChild(scri)
