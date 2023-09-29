const weight = document.getElementById('weight')
const height = document.getElementById('height')
const btn = document.querySelector('button')
const section = document.querySelector('section:last-of-type')
const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')

function bmi(){
    const wVal = weight.value
    const hVal = height.value
    const bmi = (wVal / Math.pow(hVal/100,2)).toFixed(2)

    para1.innerHTML = `BMI Result is ${bmi}kgm<sup>-2</sup>`

    let status 
    let recommendation

    para2.innerHTML = bmi >= 30 ? status = 'Status: Obesity' : bmi >= 25 ? status = 
    'Status: Overweight' : bmi >= 18.5 ? status = 'status: Healthy weight' : status =
    'Status: Underweight'

    para3.innerHTML = bmi >= 30 ?
    recommendation = 'Recommendation: "It\'s important to find a healthy balance in life and not let obsessions consume you; consider seeking professional guidance or support from loved ones to help you regain control and focus on your overall well-being. Remember, moderation and self-care are key to a fulfilling and balanced life.'
    : bmi >= 25 ? recommendation = 'Recommendation: Prioritize your health and well-being by adopting a sustainable and balanced approach to nutrition and exercise. Consult with a healthcare professional or a registered dietician to create a personalized plan that can help you achieve your weight management goals safely and effectively.'
    : bmi >= 18.5 ? recommendation = 'Recommendation: Maintain your healthy lifestyle by continuing to make nutritious food choices and staying physically active regularly. Regular check-ups with a healthcare provider can help ensure your overall well-being and catch any potential health issues early.':
    recommendation = 'Recommendation: To reach a healthy weight, focus on nourishing your body with a balanced diet rich in nutrient-dense foods and consider consulting with a healthcare professional or dietician for a personalized plan. Gradual and sustainable weight gain is key, so be patient with yourself and prioritize your overall well-being in the process.'

    section.append(para1)
    section.append(para2)
    section.append(para3)

    // alert(bmi)
}

btn.addEventListener('click', bmi)