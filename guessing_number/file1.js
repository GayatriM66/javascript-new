
const randNumber = Math.trunc(Math.random() * 20 + 1)
console.log(randNumber)

const highScore=document.querySelector('.highscore').textContent


document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.check').disabled = false
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = 20
    document.querySelector('.guess').value = " "
    document.querySelector('body').style.backgroundColor="black"
})

document.querySelector('.check').addEventListener('click', () => {
    const numberEntered = document.querySelector('.guess').value
    console.log(numberEntered)

    value = document.querySelector('.score').textContent
    document.querySelector('.score').textContent = --value

    if (numberEntered == randNumber) {
        document.querySelector('.message').textContent = "Correct Number...!!!"
        document.querySelector('.highscore').textContent = value
        document.querySelector('body').style.backgroundColor="green"
        document.querySelector('.check').disabled = true
        if (numberEntered>highScore) {
            document.querySelector('.highscore').textContent=value
        }
    }
    else if (numberEntered > randNumber) {
        document.querySelector('.message').textContent = "Numer too high...!!!"
    }
    else if (numberEntered < randNumber) {
        document.querySelector('.message').textContent = "Numer too low...!!!"

    }




    if (value == 0) {
        document.querySelector('.check').disabled = true
    }

})