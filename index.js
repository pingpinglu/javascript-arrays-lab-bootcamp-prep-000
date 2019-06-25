var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name) {
  return name.pop('Ralph')
}

function destructivelyPrependKitten(name) {
  var newName = name
  newName.unshift("new")
  return newName 
}
