var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  name.pop("new")
  return name
}

function destructivelyPrependKitten(name) {
  var newName = name
  name.unshift("new")
  return newName 
}
