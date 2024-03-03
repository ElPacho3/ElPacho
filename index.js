// Helper function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Helper function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Main function to use the helper functions
  function calculateFactorialAndCheckEven(number) {
    const factResult = factorial(number);
    const isEvenResult = isEven(number);
  
    return {
      factorialResult: factResult,
      isEvenResult: isEvenResult,
    };
  }
  
  // Example usage
  const numberToCalculate = 5;
  const results = calculateFactorialAndCheckEven(numberToCalculate);
  
  console.log(`Factorial of ${numberToCalculate} is: ${results.factorialResult}`);
  console.log(`Is ${numberToCalculate} even? ${results.isEvenResult}`);