function showSalary(users, age) {
  let result = [];
  for (item of users) {
    if (item.age <= age) {
      result.push(`${item.name}, ${item.balance}`);
    }
  }
  return result.join('\n');
}
