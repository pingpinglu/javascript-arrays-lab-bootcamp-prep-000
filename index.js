var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return name.push("new")
}

function destructivelyPrependKitten(name) {
  var newName = name
  newName.unshift("new")
  return newName 
}
