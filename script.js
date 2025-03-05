//*************************************************************
                    // TO DO LIST
//*************************************************************

const dateText = document.querySelector('.date')
const hourText = document.querySelector('.hour')



const displayDate = () => {
    let date = new Date()
        date = date.toString().split(" ")
    dateText.textContent += date[2] + " " + date[1]
    //  let hours = date[4].split("")
    //      hours = hours.slice(0,5).join('')
    //  console.log(hours);
    //  hourText.textContent = hours

}

const item = document.querySelector('#item')
const addBtn = document.querySelector('#addBtn')
const toDoItem = document.querySelectorAll('#toDoItem')


const storageArray = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

addBtn.addEventListener('click', () => {
    createItem(item)
})



// item.addEventListener("keypress", (e) => {
//     if(e.key === "Enter"){
//       createItem(item)
//     }
// })

item.addEventListener('click', () => {
    item.setAttribute("placeholder", "")
})

function createItem(item) {
    storageArray.push(item.value)
    localStorage.setItem('list', JSON.stringify(storageArray))
    location.reload()
}

const newItemDiv = document.querySelector('.newItem')


function displayList () {
    let myList = ""

    for (let el = 0; el < storageArray.length; el++) {
     myList += `<div class='textDiv'>
                <textarea disabled id="toDoItem" class="text" name="note" rows="4">${storageArray[el]}</textarea>
                <div class="icons">
                <i class="fa-solid fa-pencil editBtn"></i>
                <i class="fa-solid fa-circle-xmark xBtn"></i>
                <i class="fa-regular fa-floppy-disk saveBtn"></i>
        <!--   <i class="fa-solid fa-circle-check checkBtn"></i> -->
                </div>
                </div>`
    }
    newItemDiv.innerHTML = myList
    deleteOneItem()
    edit()
    saveNote()
    // hoverLine()

}

// toDoItem.addEventListener('click', () => {
//     toDoItem.classList.toggle('to-be-big')
// })

function deleteOneItem () {
    const delBtn = document.querySelectorAll('.xBtn')

    delBtn.forEach((db, i) => {
        db.addEventListener('click', () => {
            deleted(i)
        })
    })
}

function deleted(i) {
    storageArray.splice(i, 1)
    localStorage.setItem('list', JSON.stringify(storageArray))
    location.reload()
}
// ==========================================================
// const saveBtn = document.querySelectorAll('.saveBtn')



function edit() {
    const editBtn = document.querySelectorAll('.editBtn')

    editBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
            btn.parentElement.parentElement.classList.add('itemZoomToEdit');
            btn.parentElement.parentElement.querySelector('.text').classList.add('textToZoom');
            console.log(btn.parentElement.parentElement);
            
            editNote(i) // edit note
            showSaveBtn(i) // save button appear
            styleBtns(i) // delete Btn and Edit Btn desappear
        })
    })
}

function editNote(i) {
    let text = document.querySelectorAll('.text')
    text[i].disabled = false
    text[i].style.textDecoration = 'none'

}

// =============================================================

function showSaveBtn(i) {
    let saveBtn = document.querySelectorAll('.saveBtn')
    saveBtn[i].style.display = 'flex'
}

function styleBtns(i) {
    let editBtn = document.querySelectorAll('.editBtn')
    let delBtn = document.querySelectorAll('.xBtn')
    let checkBtn = document.querySelectorAll('.checkBtn')

    editBtn[i].style.display = 'none'
    delBtn[i].style.display = 'none'
    checkBtn[i].style.display = 'none'

}

// const editBtn = document.querySelectorAll('.editBtn')
// const delBtn = document.querySelectorAll('.xBtn')
// const saveBtn = document.querySelectorAll('.saveBtn')

// ================================================================
function saveNote() {
    let saveBtn = document.querySelectorAll('.saveBtn')
    let text = document.querySelectorAll('.text')

    saveBtn.forEach((btn, i) => {

        btn.addEventListener('click', () => {
            noteSaved(text[i].value, i)
        })
        saveBtn[i].style.display = 'none'
    })



}

// function hoverLine() {
//     let checkBtn = document.querySelectorAll('.checkBtn')

//     checkBtn.forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 checked(i)
//             })
//     })
// }

function noteSaved(text, i){
    storageArray[i] = text
    localStorage.setItem('list', JSON.stringify(storageArray))
    location.reload()

}

// function saveBtnDesappear(i) {
//     let saveBtn = document.querySelectorAll('.saveBtn')

//     saveBtn[i].style.display = 'none'
// }


// function checked(i) {
//     let text = document.querySelectorAll('#toDoItem')
//     text[i].style.textDecoration = 'line-through solid red 5px'
// }

// ================================================================
//                             SHARE
// ================================================================


const userEmail = document.getElementById('userEmail')
const sendTO = document.getElementById('cc')
const submitNotes = document.getElementById('submitNotes')

submitNotes.addEventListener('click', () => {
    if (userEmail.value !== "") {
        sendTO.value = userEmail.value
    }
})




window.onload = function() {
    displayDate()
    displayList()
};
