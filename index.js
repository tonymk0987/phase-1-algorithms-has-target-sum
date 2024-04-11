function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};

    for (let num of array) {
        const difference = target - num;
        if (seenNumbers[difference]) {
            return true;
        } else {
            seenNumbers[num] = true;
        }
    }

    return false;
}

/* 
  Write the Big O time complexity of your function here
  Write the Big O time complexity of your function here
  O(n) - Linear time complexity

*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  This function takes an array of numbers and a target value.
  It iterates through the array, calculating the difference between the target and each element.
  If the difference exists in the seen numbers object, it means a pair of numbers whose sum is equal to the target has been found, and the function returns true.
  If no such pair is found during the iteration, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
