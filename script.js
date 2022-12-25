const hamberger = document.querySelector('.hamberger')
const cross = document.querySelector('.cross')
const hambergerClick = document.querySelector('.hamberger-click')



hamberger.addEventListener('click',function(){
    hambergerClick.style.transform= "translateY(0)"
    hamberger.style.display="none"
})


cross.addEventListener('click',function(){
    hambergerClick.style.transform= "translateY(-100%)"
    hamberger.style.display="initial"

})