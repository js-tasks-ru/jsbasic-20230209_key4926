function toggleText() {
  let clickButton = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  clickButton.addEventListener('click', handler);
    function handler() {
      text.hidden = !text.hidden;
    }
}
