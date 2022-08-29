const btn=document.querySelector('.open-btn');
const closeBtn=document.querySelector('#close-btn');
const container=document.querySelector('.container2');

btn.addEventListener('click',function(){
    // console.log("hi there");
   container.classList.add('open-modal');
});
closeBtn.addEventListener('click',function(){
    container.classList.remove('open-modal');
});