let wrapper = document.createElement('div')
let text = document.createElement('h1')
let grid = document.createElement('div')
let form = document.forms.frm
let btn = document.querySelector('button')


let todos = [
    
]

form.onsubmit = (event) => {
   event.preventDefault()

   let get = {
    id: Math.random(),
    isDone: false,
    time: new Date().getHours() + ':' + new Date().getMinutes()
    
}   
   let fm = new FormData(form) 
   fm.forEach((value, key) => {
    get[key] = value
   })

   todos.push(get);
   reload(todos)

}


function reload(arr) {
    grid.innerHTML = ""

    for(let info of arr){
        // a create
        let item = document.createElement('item')
        let text2 = document.createElement('h3')
        let paragraph = document.createElement('p')
        let img = document.createElement('img')
        let edit = document.createElement('img')
        let age = document.createElement('h3')
        let modal = document.querySelector('.modal_bg')
        let editBtn = document.querySelector('.edBtn')
        let nameInp = document.querySelector('.ivop')
        let ageInp = document.querySelector('.ipol')
        let txt = document.createElement('h3')
        let num = document.createElement('h3')
        // b decor
        text2.classList.add('polo')
        age.classList.add('pol')
        item.classList.add('item')
        text2.classList.add('text2')
        text2.innerHTML = info.task 
        paragraph.classList.add('paragraph')
        txt.classList.add('txt')
        age.innerHTML = '2022' - info.age
        img.classList.add('image')
        edit.classList.add('edit')
        img.src = './icon/del.png'
        txt.innerHTML = arr.indexOf(info)+1
        edit.src = './icon/edit.png'   
        // c add
        grid.append(item)
        item.append(text2)
        item.append(paragraph)
        item.append(img)
        item.append(age)
        item.append(edit)
        item.append(txt)

        // functions
        editBtn.onclick = () => {
            let idx = todos.indexOf(info)
            text2.innerHTML = nameInp.value
            age.innerHTML = ageInp.value
        }
        img.onclick = () => {
           let idx = todos.indexOf(info)

           todos.splice(idx, 1)
            reload(todos)
        }
        edit.onclick = () => {
            modal.classList.add('mg')
        }
    } 
}


reload(todos)





// b decor
wrapper.classList.add('wrapper')
text.innerHTML = 'ADD, DEL, EDIT'
text.classList.add('text')
// box.classList.add('box')
// inp.classList.add('inp')
// button.classList.add('button')
// button.innerHTML = 'Add'
grid.classList.add('grid')

//  c add
wrapper.append(text,grid,)
// box.append(inp,button) 
document.body.prepend(wrapper)



// info.isDone ? item.classList.add('item_done') : console.log()

// item.onclick = () => {
//     if(info.isDone){
//         info.isDone = false
//     }else{
//         info.isDone = true
//     }
//     reload(todos)
// }