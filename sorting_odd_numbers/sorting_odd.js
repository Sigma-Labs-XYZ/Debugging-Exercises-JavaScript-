function sortArray(array) {
  let oddArray = []
  let sortedArray = []


array.forEach((num)=>{
    if (num % 2 !== 0 ) oddArray.push(num)
      })
 oddArray.sort(function(a,b) {return a-b})

  array.forEach((num)=>{
    if (num % 2 == 0 || num == 0){
      sortedArray.push(num)
    } else if (num % 2 !== 0 ){
      sortedArray.push(' ')
    }
      })

  sortedArray.forEach((num) => {
    if( sortedArray[i] === ' '){
      sortedArray.slice(i, 1, oddArray[0]);

      if (oddArray.length >= 1){
        oddArray.unshift()
      }
})

return sortedArray
  }