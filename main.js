let d = document
let text = d.querySelector('.text')
let createBtn = text.nextElementSibling
let pendUl = d.querySelectorAll('ul')[0]
let compUl = d.querySelectorAll('ul')[1]
let chckBtn = pendUl.querySelectorAll('input')
let dltBtn = compUl.querySelectorAll('input')



function createLi(val) {
 let li = d.createElement('li')
 let label = d.createElement('label')
 let input = d.createElement('input')
 
 label.innerHTML = val
 input.type = 'checkbox'
 li.append(label,input)
 return li
}

createBtn.addEventListener('click',function(e){
 if (!text.value) {
  alert('plese write some text')
 }else{
  let li = createLi(text.value)
  pendUl.appendChild(li)
  let checkbox = li.querySelector('input')
  checkbox.addEventListener('change', checked)
  text.value = ''
 }
})

function checked(){
 this.type = 'button'
 this.value = 'delete'
 let li = this.parentNode
 compUl.appendChild(li)
 this.addEventListener('click', deleted)
}

function deleted(){
 let li = this.parentNode
 li.remove()
}

for (let i = 0; i < chckBtn.length; i++) {
 chckBtn[i].addEventListener('change',checked)
}

for (let i = 0; i < dltBtn.length; i++) {
 dltBtn[i].addEventListener('click',deleted)
}


