console.log("Hello world")


var input = document.getElementById("myInput")
var button = document.getElementById("myButton")
var notes = document.getElementById("newNotes")

console.log(input)

button.addEventListener("click", function(e){
    e.preventDefault();
    console.log(input.value)
    notes.innerHTML = input.value

})

