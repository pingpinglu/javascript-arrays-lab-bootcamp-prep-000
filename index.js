var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name) {
  var newArray = name
  name.push('Ralph')
  return newArray
}

function destructivelyPrependKitten(name) {
  var newName = name
  newName.unshift("new")
  return newName 
}
