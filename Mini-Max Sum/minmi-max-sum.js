function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);

    console.log(arr);

    let maximum = arr.slice(1);
    let minimum = arr.slice(0, 4);
    
    let maximumSum = maximum.reduce((acc,value) => acc + value);
    let minimumSum = minimum.reduce((acc,value) => acc + value);
    
    console.log(maximumSum, minimumSum);
}

miniMaxSum([2,1,20,6,11]);