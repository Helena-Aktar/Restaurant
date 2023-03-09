var buttonActive = document.querySelector(".Button");
console.log(buttonActive);
buttonActive.addEventListener('click',function(){
    if(buttonActive=="Button p-4")
    buttonActive.classList.add('active');
})