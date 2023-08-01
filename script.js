let circle = document.querySelector('.circle');
window.addEventListener('mousemove',function(details){
    let xvalue=details.pageX;
    let yvalue=details.pageY;
    setTimeout(function(){
         circle.style.top=yvalue + 'px';
         circle.style.left=xvalue + 'px';
        },50)
   
    
})