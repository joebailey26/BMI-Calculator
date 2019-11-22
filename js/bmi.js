function calculateBmi(weight, height) {
    return (parseInt(weight) / (Math.pow(parseInt(height), 2)) * 10000).toFixed(1);
}

document.querySelector('#submit').addEventListener("click", function run(event) {
    event.preventDefault();
    var height = document.querySelector('#height').value;
    var weight = document.querySelector('#weight').value;
    document.querySelector('#result').innerHTML = "Your BMI is: " + calculateBmi(weight, height);
});