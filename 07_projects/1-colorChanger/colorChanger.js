const buttons = document.querySelectorAll('.button'); //select all buttons in which you want to make changes
const body = document.querySelector('body'); // select body bcoz we want to change backgroundd of body

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function (e) { // we can use a click event listener to the button to handle the situation
    // console.log(e);
    // console.log(e.target);
    // change background color using switch statement:

    const color = e.target.id;
    switch (color) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      default:
        console.log('no color given');
        break;
    }

    //  change background color using if statement:
    // if(e.target.id === 'grey'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'white'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'blue'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'yellow'){
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});
