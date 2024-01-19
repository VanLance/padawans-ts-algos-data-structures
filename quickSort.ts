function weakSort(arr: Array<number>, lo: number, high: number): number {
  const pivot = arr[high]
  let ind = lo - 1
  for(let i = lo; i < high; i++){
    if (arr[i] >= pivot){
      ind++
      const temp = arr[ind]
      arr[ind] = arr[i]
      arr[i] = temp
    }
  }
  ind++
  arr[high] = arr[ind]
  arr[ind] = pivot
  console.log(arr.slice(lo, high + 1))
  return ind
}


const quickSort = (arr: Array<number>, lo: number, high: number): void => {
  if (lo >= high){
    return
  }
  const pivot = weakSort(arr, lo, high)
  quickSort(arr, lo, pivot - 1)
  quickSort(arr, pivot + 1, high)
}

const nums = [ 88, 77, 99, 80, 14, 100, 150, 20, 33, 55, 22, 87]
quickSort(nums, 0, nums.length - 1)
console.log(nums)