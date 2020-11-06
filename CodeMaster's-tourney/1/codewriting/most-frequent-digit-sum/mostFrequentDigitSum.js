function mostFrequentDigitSum(n) {
  let sequence = new Map(),
    mostFrequent = 0

  while (n != 0) {
    let nString = ("" + n).split("")
    let digitSum = 0

    for (let i in nString) {
      digitSum += parseInt(nString[ i ])
    }

    // console.log(digitSum)
    if (!sequence.has(digitSum)) {
      sequence.set(digitSum, 1)
    } else if (sequence.has(digitSum)) {
      sequence.set(digitSum, sequence.get(digitSum) + 1)
    }

    n = n - digitSum
  }

  // Determine most frequent integer
  for (let sum of sequence) {
    // if frequency of integer is the same, get the highest number  
    mostFrequent = Math.max(mostFrequent, sum[ 1 ])
  }

  // Remove all but most frequent integers
  map = Array
    .from(sequence)
    .filter(element => element[ 1 ] === mostFrequent)

  if (map.length > 1) {
    let greatestMostFrequent = 0
    for (let i in map) {
      greatestMostFrequent = Math.max(greatestMostFrequent, map
      [ i ][ 0 ])
    }
    return greatestMostFrequent
  }

  console.log(map.length)

  // Return the most frequent integer
  for (let sum of sequence) {
    if (mostFrequent == sum[ 1 ]) {
      return sum[ 0 ]
    }
  }
}
