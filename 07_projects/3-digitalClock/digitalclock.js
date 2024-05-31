const clock = document.querySelector('#clock');

setInterval(() => {
    let date = new Date();
    // console.log(date.toDateString());
    clock.innerHTML = date.toTimeString();
}, 1000);