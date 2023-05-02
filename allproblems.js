// problem: arrange the array in ascending order by loop

let arry = [2, 4, 6, 8, 2];

for (let i = 0; i < arry.length; i++) {
  for (let j = i + 1; j < arry.length; j++) {
    if (arry[i] > arry[j]) {
      const temp = arry[i];
      arry[i] = arry[j];
      arry[j] = temp;
    }
  }
}


// via single loop

for (let i = 0; i < arry.length; i++) {
  if (arry[i] > arry[i + 1]) {
    const result = arry[i];
    arry[i] = arry[i + 1];
    arry[i + 1] = result;

    i = -1;
  }
}

console.log(arry);
