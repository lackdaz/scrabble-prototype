var array = [5, 3, 2, 8, 1, 4]

sortArray(array)

function sortArray(array) {
  var sortedOdd = array.filter(function(x) {
  return x % 2 !== 0
}).sort(function(a,b){
    return a - b
  }).reverse()

  console.log(sortedOdd)

  return array.map(function(value) {
    return (value % 2 !== 0) ? sortedOdd.pop():value
  })
}
