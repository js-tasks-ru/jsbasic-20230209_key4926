function getMinMax(str) {
  let arr = str.split(/[ ,]+/);
  let minNumber = +arr[0];
  let maxNumber = minNumber;
  for (let i = 0; i < arr.length; i++) {
    let a = +arr[i];
    if (a < minNumber) minNumber = a;
    if (a > maxNumber) maxNumber = a;
  }
  return {min: minNumber, max: maxNumber};
}
