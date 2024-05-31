// how to find BMI (Body Mass Index) :

const myForm = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value); // if we declare or select this here it will give us empty result

myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // preventdefault method is used to stop default actions submission

    // declare or select variables according to their class and id 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        //  show the result :
        if (bmi <= 18.6){
            results.innerHTML = `BMI is : ${bmi} and it is under weight`;
        } else if (bmi >= 18.6 || bmi <= 24.9){
            results.innerHTML = `BMI is : ${bmi} and it is in normal range`;
        } else if (bmi >= 24.9){
            results.innerHTML = `BMI is : ${bmi} and it is over weight`;
        } else {
            results.innerHTML = `<span>${bmi}</span>`;
        }
    }

    
})