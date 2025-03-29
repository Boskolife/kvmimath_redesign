showDropDown();


function showDropDown() {
  const button = document.querySelector('.dropdown-button');
  const content = document.querySelector('.dropdown-content');

  button.addEventListener('click', () => {
    content.classList.toggle('show');
    button.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    if (!button.contains(event.target) && !content.contains(event.target)) {
      content.classList.remove('show');
      button.classList.remove('open');
    }
  });
}
