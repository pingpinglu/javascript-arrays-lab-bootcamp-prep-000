var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name) {
  var newArray = name
  newArray.pop('Ralph')
  return newArray
}

function destructivelyPrependKitten(name) {
  var newName = name
  newName.unshift("new")
  return newName 
}
