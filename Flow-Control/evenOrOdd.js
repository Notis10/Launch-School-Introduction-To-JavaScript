function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('error');
    return;
  }
  
  if (num%2 === 0) {
      console.log('even');
  } else {
      console.log('odd');
    }
}

evenOrOdd(12.1);