var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name) {
  return name.push("new")
}

function destructivelyPrependKitten(name) {
  var newName = name
  newName.unshift("new")
  return newName 
}
