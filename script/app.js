let $ = document

let ulElem = $.querySelector(".todos")
let inputElem = $.querySelector("input")
let todoForm = $.querySelector(".add")


function newTodoValue(todoValue) {
    let newLi = $.createElement("li")
    newLi.className = "list-group-item d-flex justify-content-between"

    let newTrash = $.createElement("i")
    newTrash.className = "fa fa-trash-o delete"

    let newSpan = $.createElement("span")
    newSpan.innerHTML = todoValue

    newTrash.addEventListener("click", function (event) {
        event.target.parentElement.remove()
    })

    newLi.append(newTrash, newSpan)
    ulElem.append(newLi)

    todoForm.addEventListener("submit", function (event) {
        event.preventDefault()
    })

}

inputElem.addEventListener("keydown", function (event) {
    let todoValue = event.target.value.trim()

    if (event.keyCode === 13) {
        inputElem.value = ""
        newTodoValue(todoValue)
    }
})