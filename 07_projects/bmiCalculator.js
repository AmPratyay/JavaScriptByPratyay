const form = document.querySelector('.formBtn');
const height = document.getElementById('height');
const weight = document.getElementById('weight' );
const result = document.getElementById('results');
const message = document.getElementById('message');


const calculateBmi = (height,weight) => {
    return ((weight * 10000) / (height * height)).toFixed(2);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let heightVal = parseInt(height.value);
    let weightVal = parseInt(weight.value);
    if(heightVal === '' || heightVal < 0 || isNaN(heightVal)) {
        result.innerHTML = `Please Enter Valid height ${heightVal}`
    } else if(weightVal === '' || weightVal < 0 || isNaN(weightVal)) {
        result.innerHTML = `Please Enter Valid weight ${weightVal}`
    } else {
        let bmi = calculateBmi(heightVal, weightVal)
        result.innerText = `BMI is : ${bmi}`

        if(bmi < 18.6) {
            message.innerHTML = `You are Under Weight`
        }else if (bmi > 18.6 && bmi < 24.9){
            message.innerHTML = `You are in Normal Range`
        }else {
            message.innerHTML = `You are Over Weight`
        }
    }

    height.value = ''
    weight.value = ''

})