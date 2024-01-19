console.log('ts')

function bs(arr: number[], target: number):number {
  let left: number = 0
  let right = arr.length 
  while(left < right){
    let middleI: number = Math.floor((left + right) / 2)
    let currentVal = arr[middleI] 
    if( target < currentVal){
      right = middleI
    } else if ( target > currentVal){
      left = middleI + 1
    } else {
      return middleI
    }
  }
  return -1
}

// bs([33])

console.log(bs([1,2,3,4,5,6,7,8], 4), 4)

console.log(bs([1,2,3,4,5,6,7,8], 1), 0)

console.log(bs([1,2,3,4,5,6,7,8], 8), 7)

console.log(bs([1,2,3,4,5,6,7,8], 9), -1)