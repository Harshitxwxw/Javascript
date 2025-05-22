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

…      body.style.backgroundColor = e.target.id
    } 
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```