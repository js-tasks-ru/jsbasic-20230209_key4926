
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  let sumSalary = 0;
  for (let key in salaries) {
    if (isFinite(salaries[key])) {
       sumSalary += salaries[key];
    }
  }
  return sumSalary;
}
console.log(sumSalary(salaries));