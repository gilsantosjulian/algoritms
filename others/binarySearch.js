let arr = [1, 15, 39, 24, 17, 23, 45]
const half = parseInt(arr.length / 2)
const divided = arr.slice(half)
const divided2 = arr.slice(0, half)

console.log('half: ', half);
console.log('divided: ', divided);
console.log('divided2: ', divided2);

arr = arr.sort()
const binarySearch = (arr, element) => {
  const half = parseInt(arr.length / 2)
  const current = arr[half]

  if(current === element) return element
  if (element > current) return binarySearch(arr.slice(half), element)
  if (element < current) return binarySearch(arr.slice(0, half), element)
}

console.log('binarySearch: ', binarySearch(arr, 15));
