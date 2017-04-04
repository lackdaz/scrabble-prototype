function game(string,word) {
  function scrabble(string,word) {

    // splitting the long string into an array
    var strArr = string.split('')

    // splitting the word into an array
    var wordArr = word.split('')
    console.log(strArr)

    // filter the word array with the str array, and splice the str array of common occurences
    var result = wordArr.filter(function(letter) {
      if (strArr.includes(letter)) {
        strArr.splice(strArr.indexOf(letter),1)
        return letter
      }
    })

    // count the number of wildcards
    var wildcardCount = strArr.filter(function(val) {
      return (val === '?')
    }).length

    console.log('the result array is:')
    console.log(result)
    console.log('the word array is:')
    console.log(wordArr)

    console.log('Wildcard count:'+wildcardCount)
    console.log('strArray match count:'+result.length)
    console.log('Letters needed: '+wordArr.length)

    // word can be formed if matches + wildcards >= no. of word tiles
    return (result.length + wildcardCount >= wordArr.length) ?  true :  false
  }
  return {scrabble}
}

module.exports = game()

// module.exports
