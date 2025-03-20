const clock = document.getElementById('clock');


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString('en-US');
},1000)