// Minimum Number Of Coins To Make Change
// Determine the smallest number of coins needed from a given set of denominations to reach a specific target sum. 
// The denominations are infinitely available, meaning you can use them repeatedly. Find the minimum number of coins required to achieve the target sum.

// Time: O(nd), Space: O(n); n = target, d = coins array
const minimumNumberOfCoinsToMakeChange = (coins, target) => {
  const ways = new Array(target + 1).fill(Infinity)
  ways[0] = 0

  for (let i = 0; i < coins.length; i++) {
    for (let amount = 0; amount < ways.length; amount++) {
      if (coins[i] <= amount) {
        ways[amount] = Math.min(ways[amount], 1 + ways[amount - coins[i]])
      }
    }
  }
  return ways[target] !== Infinity ? ways[target] : -1
}

// driver code
const coins = [1, 2, 4]
const target = 6
console.log(minimumNumberOfCoinsToMakeChange(coins, target))
