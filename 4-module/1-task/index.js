function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (let i of friends) {
    let li = document.createElement('li')
    li.innerHTML = `${i.firstName} ${i.lastName}`;
    ul.appendChild(li);
  }
  return ul;
}
