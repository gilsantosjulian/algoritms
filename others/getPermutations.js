const getPermutations = (string, prefix ='') => {
  if(string.length === 1)
    return [prefix + string]
  
    // El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.
  return Array.from(string).reduce((result, current, index) => {
    const reminder = string.slice(0, index) + string.slice(index + 1)
    return result.concat(getPermutations(reminder, prefix + current))
  }, [])
}


console.log(getPermutations('a'))
console.log(getPermutations('ab'))
console.log(getPermutations('abc'))
