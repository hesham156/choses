const element1 = document.querySelector('.col-md-3.logo-wrapper.d-flex.d-lg-block');
const element2 = document.querySelector('.col-sm-12.col-md-6.d-lg-flex.search-container');
element1.parentNode.insertBefore(element2,element1);
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
h[i].childNodes[1].innerText=''
h[i].appendChild(span);
}
},2000)
}
td('.section--title')
//for animate

function anim(theSel,dad){
var padd = document.querySelectorAll(theSel)

 var div2 = document.createElement('div');
  div2.classList.add("confetti-piece");
   var div1 = document.createElement('div');
  div1.classList.add("confetti-piece");
  var div3 = document.createElement('div');
  div3.classList.add("confetti-piece");
  var div4 = document.createElement('div');
  div4.classList.add("confetti-piece");
   var div5 = document.createElement('div');
  div5.classList.add("confetti-piece");
  var div6 = document.createElement('div');
  div6.classList.add("confetti-piece");
   var div7 = document.createElement('div');
  div7.classList.add("confetti-piece");
  var div7 = document.createElement('div');
  div7.classList.add("confetti-piece");
  var div8 = document.createElement('div');
  div8.classList.add("confetti-piece");
   var div9 = document.createElement('div');
  div9.classList.add("confetti-piece");
  var div10 = document.createElement('div');
  div10.classList.add("confetti-piece");
   var div11 = document.createElement('div');
  div11.classList.add("confetti-piece");
   var div12 = document.createElement('div');
  div12.classList.add("confetti-piece");
  var div13 = document.createElement('div');
  div13.classList.add("confetti-piece");
  for(let i =0;i<=padd.length;i++){
  padd[i].onclick=function(){
          var div = document.createElement('div');
          div.classList.add("confetti");
          div.append(div2,div1,div3,div4,div5,div6,div7,div8,div9,div10,div11,div12,div13);
    document.querySelector(dad).appendChild(div)
           }
           padd[i].addEventListener('click',function(){
 setTimeout(function(){
 document.querySelector('.confetti').remove()
      },3000)
      })
  }
}
anim('.product-add','.store-home')
