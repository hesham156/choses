const mylist = Array.from(document.querySelectorAll('.root-level.data-collapsible.mobile-accordion.has-children.slide-toggler'))
console.log(mylist)
mylist[0].classList.add('collapsible-open')
mylist.forEach((btn)=>{
   btn.onclick=()=>{
      for(let i = 0 ; i<mylist.length;i++){
          mylist[i].classList.remove('collapsible-open')
          mylist[i].children[1].style=`max-height:0;`
      }
btn.classList.add('collapsible-open')
  btn.children[1].style=`max-height:200vh;`

   }
})
