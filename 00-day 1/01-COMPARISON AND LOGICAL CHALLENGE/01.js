let person = {
    name: "Luck",
    weight: 70,
    height: 1.72
}

bmi = person.weight/person.height**2
if (bmi < 18.5) {
    console.log("Your BMI is "+bmi.toFixed(2)+", so you are underweight")
} else if (bmi >=  18.5) {
    console.log("Your BMI is "+bmi.toFixed(2)+", so you have a normal weight")
} else if (bmi > 24.9) {
    console.log("Your BMI is "+bmi.toFixed(2)+", so you are overweight")
}