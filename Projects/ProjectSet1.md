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