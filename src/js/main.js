import { fadeIn, fadeOut } from './fade';

showDropDown();
initTabs();
burgerInit();

function burgerInit() {
  const burger = document.querySelector('.header_burger');
  const menu = document.querySelector('.header_content-bottom');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');
  });
}

function showDropDown() {
  const buttons = document.querySelectorAll('.dropdown-button');
  const contents = document.querySelectorAll('.dropdown-content');

  buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const isActive = contents[index].classList.contains('show');

      contents.forEach((content) => content.classList.remove('show'));
      buttons.forEach((btn) => btn.classList.remove('open'));

      if (!isActive) {
        contents[index].classList.add('show');
        button.classList.add('open');
      }
    });
  });

  document.addEventListener('click', () => {
    contents.forEach((content) => content.classList.remove('show'));
    buttons.forEach((button) => button.classList.remove('open'));
  });
}

function initTabs() {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      const activeTab = document.getElementById(tabId);

      if (activeTab.classList.contains('active')) return;

      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      contents.forEach((content) => {
        if (content.classList.contains('active')) {
          fadeOut(content, 300, () => {
            content.classList.remove('active');
            activeTab.classList.add('active');
            fadeIn(activeTab, 300);
          });
        }
      });
    });
  });
}
