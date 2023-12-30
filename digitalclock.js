const time = document.querySelector('.js-button')

setInterval(function(){
    let date = new Date();
 time.innerHTML = date.toLocaleTimeString();

},1000)
