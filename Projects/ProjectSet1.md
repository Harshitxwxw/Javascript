# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

# Solution code

## Project 1 : Color Changer

```javascript

const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')

buttons.forEach(function(button){
  // console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    } 
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    } 
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## Project 2 : BMI Calculator

``` javascript
const form = document.querySelector('form')

//   This usecase will give empty
// const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height =parseInt(document.querySelector('#height').value)
  const weight =parseInt(document.querySelector('#weight').value)
  const result =document.querySelector('#results')
  let bmi ;

  if(height === '' || height< 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === '' || weight< 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight : ${weight}`
  }

  else {
     bmi = (weight/((height*height)/10000)).toFixed(2)

    // show the result
    result.innerHTML = `<span>${bmi}</span>`
  }


  //   Message show
  const msgShow =document.querySelector('#msg')
  let msg
  if (bmi < 18.6){
    msg = document.querySelector('#under').innerHTML
  }

  else if (18.6 <= bmi && bmi<= 24.9){
    msg = document.querySelector('#normal').innerHTML
  }

  else {
    msg = document.querySelector('#over').innerHTML
  }

  msgShow.innerHTML = `<span>${msg}</span>`


})
```

## Project 3 : Digital Clock
``` Javascript
const clock = document.getElementById("clock")

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
},1000);
```

## Project 4 : Guess Number
``` Javascript
let randomNumber = parseInt(Math.random()*100 +1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid Number")
  }  else if (guess < 1){
    alert("Please enter a Number more than 1 ")
  }  else if (guess > 100){
    alert("Please enter a Number less than 100")
  }  else {
      prevGuess.push(guess)

      if (numGuess > 10){
        displayGuess(guess)
        displayMsg(`Game over. Random Number was  : ${randomNumber}`)
        endGame()
      }
      else {
        displayGuess(guess)
        checkGuess(guess)
      }
  }
}

function checkGuess (guess){
  if (guess === randomNumber){
    displayMsg(`You guessed it right`)
    endGame()
  } else if (guess < randomNumber){
    displayMsg(`Number is TOO LOW`)
  }else if (guess > randomNumber){
    displayMsg(`Number is TOO HIGH`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guesSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11-numGuess} `
}

function displayMsg(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame (){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = 'newGame'>Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame();
}
function newGame (){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100 +1)
    prevGuess = []
    numGuess = 1 
    guesSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess} `;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame =true

  })
}


```

## Project 5 : Keyboard Check
``` Javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class = 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    </table>
  </div>`
})
```
## Project 6 : ChangeUnlimited background color

``` JAVASCRIPT 
//  generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i =0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalId;
const startChangingColor= function(){
  if(!intervalId){
  intervalId = setInterval(changeBgColor,1000)
  }
  function changeBgColor(){
  document.body.style.backgroundColor = randomColor()
  }
}

const stopChangingColor= function(){
  clearInterval(intervalId);
  intervalId = null;
}


document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)
```