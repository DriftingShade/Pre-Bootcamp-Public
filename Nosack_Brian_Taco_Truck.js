function optimalTruckLocation(customerCoordinates) {
    // Extract x and y coordinates into separate arrays
    const xCoordinates = customerCoordinates.map(coord => coord[0]);
    const yCoordinates = customerCoordinates.map(coord => coord[1]);

    // Calculate median for x and y coordinates
    const medianX = calculateMedian(xCoordinates);
    const medianY = calculateMedian(yCoordinates);

    // Return the optimal truck location as [medianX, medianY]
    return [medianX, medianY];
}

  // Helper function to calculate the median of an array
function calculateMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
      // If array length is even, return the average of two middle values
      return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
      // If array length is odd, return the middle value
      return sortedArr[middle];
    }
}

const customerCoordinates = [[8, 4], [7, -1], [6, 2], [-8, 4]];
const optimalLocation = optimalTruckLocation(customerCoordinates);

console.log("Optimal Truck Location:", optimalLocation);