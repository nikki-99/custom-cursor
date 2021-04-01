
var cursor = document.querySelector('.cursor'); 


document.addEventListener("mousemove", function(event){

    cursor.style.left = event.pageX + '.px';
    cursor.style.top = event.pageY + '.px';
});