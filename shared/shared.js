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
    { text: 'Home', href: './index.html' },
    { text: 'Process', href: './process.html' },
    { text: 'Services', href: './services.html' },
    { text: 'Portfolio', href: './portfolio.html' },
    { text: 'About', href: './about.html' },
    { text: 'Contact Us', href: './contact.html', className: 'header__menu-contact' }
  ];

  menuItems.forEach(itemData => {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = itemData.href;
    link.textContent = itemData.text;
    if (itemData.className) {
      link.className = itemData.className;
    }
    // Set data-page attribute based on the page name
    const pageName = itemData.href.split('/').pop().split('.')[0];
    link.setAttribute('data-page', pageName);

    menuItem.appendChild(link);
    menu.appendChild(menuItem);
  });

  // Add the close button for the menu
  const closeButton = document.createElement('button');
  closeButton.className = 'menu__close-btn menu-btn';
  const closeIcon = document.createElement('i');
  closeIcon.className = 'fas fa-times';
  closeButton.appendChild(closeIcon);
  menu.appendChild(closeButton);


  // Toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'menu__toggle menu-btn';

  const toggleIcon = document.createElement('i');
  toggleIcon.className = 'fas fa-bars';

  toggleButton.appendChild(toggleIcon);

  nav.appendChild(menu);
  nav.appendChild(toggleButton);


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

// ********** Toggle Links ************

function initMenuToggle() {
  const menuToggle = document.querySelector('.menu__toggle');
  const closeBtn = document.querySelector('.menu__close-btn');
  const menuLinks = document.querySelector('.header__menu');

  menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('show-links');
  });

  closeBtn.addEventListener('click', () => {
    menuLinks.classList.remove('show-links');
  });
}


document.addEventListener('DOMContentLoaded', () => {
  // Initialize the menu toggle
  initMenuToggle();

  // ***** Add 'selected' class to the opened link *****

  // Get all the Navbar links
  const menuLinks = document.querySelectorAll('.header__menu a');

  // Get the current page's URL
  const currentURL = window.location.pathname;

  menuLinks.forEach(link => {
    // const linkHref = link.getAttribute('href');
    const linkPage = link.getAttribute('data-page'); // Get the data-page attribute

    // Check if the currentURL is the root
    if (currentURL === '/' && linkPage === 'index') {
      // Add selected class to Home link
      link.classList.add('selected');
    } else if (linkPage && currentURL.includes(linkPage)) {
      link.classList.add('selected');
    }
  });
});


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


// ***** Create info box with an orange line *****

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


// ***** Create the Footer *****

// Create the footer
export function createFooter() {

  // Create footer container
  const footer = document.querySelector('footer');
  footer.classList.add('footer');

  // Create and append the info box
  const footerInfoBox = createInfoBox('Contact', "Have a Question or Idea? Let's Talk!", '', '');
  footerInfoBox.classList.add('footer__info-box');
  footer.appendChild(footerInfoBox);

  // Create and append the infoImg container with info and img children
  const infoImgContainer = document.createElement('div');
  infoImgContainer.classList.add('footer__content-container');

  // Create the info content
  const infoContentDiv = document.createElement('div');
  infoContentDiv.classList.add('footer__info-content');

  const infoContentTitle = document.createElement('h2');
  infoContentTitle.textContent = 'Want to start a Project With Us?';

  const infoContentButton = document.createElement('button');
  infoContentButton.classList.add('btn');
  infoContentButton.textContent = "Let's talk";

  infoContentDiv.appendChild(infoContentTitle);
  infoContentDiv.appendChild(infoContentButton);

  // Create the img content
  const imgContentDiv = document.createElement('div');
  imgContentDiv.classList.add('footer__img-content');

  const imgContentImage = document.createElement('img');
  imgContentImage.src = '../shared/imgs/footer.png';
  imgContentImage.alt = 'image';

  imgContentDiv.appendChild(imgContentImage);

  // Append info and img content to the infoImg container
  infoImgContainer.appendChild(infoContentDiv);
  infoImgContainer.appendChild(imgContentDiv);

  // Append infoImg container to footer
  footer.appendChild(infoImgContainer);

  // Create and append the separating line
  const line = document.createElement('div');
  line.classList.add('footer__line');
  footer.appendChild(line);

  // Create and append the div with contact and rights divs
  const additionalInfo = document.createElement('div');
  additionalInfo.classList.add('footer__additional-info');

  // Create and append contacts info div with email, menu, privacy and socials divs

  const footerContactsDiv = document.createElement('div');
  footerContactsDiv.classList.add('footer__contacts');

  // Create and add content to footer__contacts div
  const footerLogo = document.createElement('img');
  footerLogo.src = '../shared/imgs/logo.png';
  footerLogo.alt = 'footer logo';
  footerLogo.className = 'footer__logo';

  const footerContactParagraph1 = document.createElement('p');
  footerContactParagraph1.textContent = 'dewebtechlimited@gmail.com';

  const footerContactParagraph2 = document.createElement('p');
  footerContactParagraph2.textContent = 'Groningen, the Netherlands';

  footerContactsDiv.appendChild(footerLogo);
  footerContactsDiv.appendChild(footerContactParagraph1);
  footerContactsDiv.appendChild(footerContactParagraph2);


  // Create the footer__details div
  const footerDetailsDiv = document.createElement('div');
  footerDetailsDiv.classList.add('footer__details');

  // Create and add content to footer__details div
  const footerMenuDiv = document.createElement('div');
  footerMenuDiv.classList.add('footer__menu');

  // Set up menu content
  const footerMenuList = document.createElement('ul');
  footerMenuList.className = 'footer__menu-list';

  // Create menu items and add them to the menu
  const footerMenuItems = [
    { text: 'Home', link: './index.html' },
    { text: 'Process', link: './process.html' },
    { text: 'Services', link: './services.html' },
    { text: 'Portfolio', link: './portfolio.html' },
    { text: 'About', link: './about.html' },
    { text: 'Contact Us', link: './contact.html' }
  ];

  footerMenuItems.forEach(itemData => {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = itemData.link;
    link.textContent = itemData.text;
    if (itemData.className) {
      link.className = itemData.className;
    }
    menuItem.appendChild(link);
    footerMenuList.appendChild(menuItem);
  });

  footerMenuDiv.appendChild(footerMenuList);


  // Create privacy div and add content to it
  const footerPrivacyDiv = document.createElement('div');
  footerPrivacyDiv.classList.add('footer__privacy');

  // Set up privacy content
  const privacyHeaderParagraph = document.createElement('p');
  privacyHeaderParagraph.textContent = 'Privacy';

  const privacyContentParagraph1 = document.createElement('p');
  privacyContentParagraph1.textContent = 'Privacy Policy';

  const privacyContentParagraph2 = document.createElement('p');
  privacyContentParagraph2.textContent = 'Terms and Conditions';

  footerPrivacyDiv.appendChild(privacyHeaderParagraph);
  footerPrivacyDiv.appendChild(privacyContentParagraph1);
  footerPrivacyDiv.appendChild(privacyContentParagraph2);


  // Create socials div and add content to it
  const footerSocialsDiv = document.createElement('div');
  footerSocialsDiv.classList.add('footer__social');

  // Set up socials content
  const socialText = document.createElement('p');
  socialText.textContent = 'Follow us on:';
  footerSocialsDiv.appendChild(socialText);

  const socialIconsDiv = document.createElement('div');
  socialIconsDiv.className = 'footer__social-icons';

  const socialLinks = [
    { href: 'https://instagram.com/', icon: 'fa-brands fa-instagram' },
    { href: 'https://dribbble.com/', icon: 'fa-brands fa-dribbble' },
    { href: 'https://linkedin.com/', icon: 'fa-brands fa-linkedin' },
  ];

  socialLinks.forEach((link) => {
    const a = document.createElement('a');
    a.href = link.href;
    a.className = link.icon;
    a.target = '_blank';
    socialIconsDiv.appendChild(a);
  });
  footerSocialsDiv.appendChild(socialIconsDiv);

  footerDetailsDiv.appendChild(footerMenuDiv);
  footerDetailsDiv.appendChild(footerPrivacyDiv);
  footerDetailsDiv.appendChild(footerSocialsDiv);

  // Append footerContactsDiv and footerDetailsDiv to footer__additional-info
  additionalInfo.appendChild(footerContactsDiv);
  additionalInfo.appendChild(footerDetailsDiv);


  // Select date
  const currentYear = new Date().getFullYear();

  // Create rights div
  const footerRightsDiv = document.createElement('div');
  footerRightsDiv.classList.add('footer__rights');

  // Create and add content to footer__rights div
  const rightsText = document.createElement('p');
  rightsText.innerHTML = `&copy; <span id='date'>${currentYear}</span> DeWeb. All rights reserved`;
  footerRightsDiv.appendChild(rightsText);

  // Append additional info and rights to footer
  footer.appendChild(additionalInfo);
  footer.appendChild(footerRightsDiv);

  return footer;
}


// ***** Create custom element for the phases and values *****

export function createCustomElement(number, title, description, items = []) {

  // Create the element
  const element = document.createElement('div');
  element.classList.add('custom-element');

  // Create the elementHeader
  const elementHeader = document.createElement('div');
  elementHeader.classList.add('element-header');

  // Create and append the h4 number element to the elementHeader
  const h4Number = document.createElement('h4');
  h4Number.classList.add('element-header-h4-number');
  h4Number.textContent = number;
  elementHeader.appendChild(h4Number);

  // Create and append the h4 title element to the elementHeader
  const h4Title = document.createElement('h4');
  h4Title.textContent = title;
  elementHeader.appendChild(h4Title);

  // Append the elementHeader to the element
  element.appendChild(elementHeader);

  // Create and append the p element to the element
  const pDescription = document.createElement('p');
  pDescription.textContent = description;
  element.appendChild(pDescription);

  // Create the optional list
  if (items.length > 0) {
    const itemList = document.createElement('ul');
    items.forEach(itemText => {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      itemList.appendChild(listItem);
    });
    element.appendChild(itemList);
  }

  return element;
}