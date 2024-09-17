function addTenToEach(arr) {
    arr.forEach((m,i) => {
        arr[i] = m + 10
    })
}

let nums = [1,2,3]
console.log(nums)
addTenToEach(nums)
console.log(nums)