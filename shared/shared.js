// ***** Create Header with Navbar and Hero *****

export function createHeader() {

  // Get the header element
  const header = document.querySelector('header');

  // Create the nav element
  const nav = document.createElement('nav');
  nav.className = 'header__nav';

  // Create the logo element
  const logo = document.createElement('img');
  logo.src = './shared/imgs/logo.png';
  logo.alt = 'logo';
  logo.className = 'logo';
  nav.appendChild(logo);

  // Create the menu element
  const menu = document.createElement('ul');
  menu.className = 'header__menu';

  // Create menu items and add them to the menu
  const menuItems = [
    { text: 'Home', link: './index.html' },
    { text: 'Process', link: './process.html' },
    { text: 'Services', link: './services.html' },
    { text: 'Portfolio', link: './portfolio.html' },
    { text: 'About', link: './about.html' },
    { text: 'Contact Us', link: './contact.html', className: 'header__menu-contact' }
  ];

  menuItems.forEach(itemData => {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = itemData.link;
    link.textContent = itemData.text;
    if (itemData.className) {
      link.className = itemData.className;
    }
    menuItem.appendChild(link);
    menu.appendChild(menuItem);
  });

  nav.appendChild(menu);

  // Create the hero element
  const hero = document.createElement('div');
  hero.className = 'header__hero';

  // Create the hero info element
  const heroInfo = document.createElement('div');
  heroInfo.className = 'header__hero-info';

  const h1 = document.createElement('h1');
  heroInfo.appendChild(h1);

  const p = document.createElement('p');
  heroInfo.appendChild(p);

  hero.appendChild(heroInfo);

  // Create the hero image element
  const heroImg = document.createElement('div');
  heroImg.className = 'header__hero-img';

  const img = document.createElement('img');
  heroImg.appendChild(img);

  hero.appendChild(heroImg);

  // Add the elements to the header
  header.appendChild(nav);
  header.appendChild(hero);

  return header;
}


// ***** Create Button *****

export function createSharedButton(text, url) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add('btn');

  // Add an event listener to navigate to the specified URL when the button is clicked
  button.addEventListener('click', () => {
    window.location.href = url;
  });

  return button;
}


// ***** Create info-box with h4 text and orange line, h2, p and another h4 button *****

export function createInfoBox(titleText, h2Text, pText, aText) {
  // Create the info-box element
  const infoBox = document.createElement('div');
  infoBox.classList.add('info-box');

  // Create the first div element
  const firstDiv = document.createElement('div');
  firstDiv.classList.add('info-box__h5-line');

  // Create the h5 text element
  const h5Title = document.createElement('h5');
  h5Title.classList.add('info-box__h5-title');
  h5Title.textContent = titleText;

  // Create the orange line element
  const orangeLine = document.createElement('div');
  orangeLine.classList.add('info-box__orange-line');

  // Add the elements to the first div
  firstDiv.appendChild(h5Title);
  firstDiv.appendChild(orangeLine);

  // Create the second div element
  const secondDiv = document.createElement('div');
  secondDiv.classList.add('info-box__content');

  // Create the h2 element
  const h2 = document.createElement('h2');
  h2.textContent = h2Text;

  // Create the container div for p and h5Btn
  const pTextBtnContainer = document.createElement('div');
  pTextBtnContainer.classList.add('info-box__pTextBtn-container');

  // Create the p element
  if (pText) {
    const p = document.createElement('p');
    p.textContent = pText;

    // Add the p element to the container
    pTextBtnContainer.appendChild(p);
  }

  // Create the text-button element
  if (aText) {
    const textBtn = document.createElement('a');
    textBtn.classList.add('text-btn');
    textBtn.textContent = aText;

    // Add the text-button element to the container
    pTextBtnContainer.appendChild(textBtn);
  }

  // Add the h2 element and p/textBtn container to the second div
  secondDiv.appendChild(h2);
  secondDiv.appendChild(pTextBtnContainer);

  // Add the divs to the info-box
  infoBox.appendChild(firstDiv);
  infoBox.appendChild(secondDiv);

  return infoBox;
}
