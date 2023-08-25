// ***** Create accordion element *****

export function appendAccordionToContainer(container) {

  // Create accordion element
  const accordionContainer = document.createElement('div');
  accordionContainer.classList.add('accordion');

  // Create accordion items
  const accordionItems = [
    {
      title: 'Branding',
      imgSrc: './index/imgs/branding-photo.jpg',
      alt: 'branding photo',
    },
    {
      title: 'Website Design',
      imgSrc: './index/imgs/branding-photo.jpg',
      alt: 'branding photo',
    },
    {
      title: 'Website Development',
      imgSrc: './index/imgs/branding-photo.jpg',
      alt: 'branding photo',
    },
    {
      title: 'SEO Optimisation',
      imgSrc: './index/imgs/branding-photo.jpg',
      alt: 'branding photo',
    },
  ];


  accordionItems.forEach((itemData, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion__item');

    const itemHeader = document.createElement('div');
    itemHeader.classList.add('accordion__item-header');

    const title = document.createElement('h3');
    title.classList.add('accordion__item-title');
    title.textContent = `0${index + 1} ${itemData.title}`;

    // Toggle arrow icon
    const toggleArrow = document.createElement('div');
    toggleArrow.classList.add('accordion__item-arrow');

    // Append the title and toggle arrow to the item header
    itemHeader.appendChild(title);
    itemHeader.appendChild(toggleArrow);

    // Create the content element
    const image = document.createElement('img');
    image.classList.add('accordion__item-image');
    image.src = itemData.imgSrc;
    image.alt = itemData.alt;

    // Append the item header and image to the item accordion
    accordionItem.appendChild(itemHeader);
    accordionItem.appendChild(image);

    // Append the item to the accordion container
    accordionContainer.appendChild(accordionItem);
  });
  
  container.appendChild(accordionContainer);
}


// ***** Accordion functionality *****
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion__item');

  // Initialize with the index of the first item
  let currentlyOpenIndex = 0;

  accordionItems.forEach((item, index) => {
    const itemHeader = item.querySelector('.accordion__item-header');
    const toggleIcon = item.querySelector('.accordion__item-arrow');
    const title = item.querySelector('.accordion__item-title');
    const content = item.querySelector('.accordion__item-image');

    // Open the first item by default
    let isOpen = index === currentlyOpenIndex;

    if (isOpen) {

      // Show the arrow for the opened item
      toggleIcon.classList.add('accordion__item-arrow-opened');

      // Show the content for the opened item
      content.classList.add('active');

      // Add the "opened" class to the opened title
      title.classList.add('opened');

    } else {

      // Show the arrow for the closed items
      toggleIcon.classList.add('accordion__item-arrow-closed');
    }

    itemHeader.addEventListener('click', () => {
      if (index !== currentlyOpenIndex) {

        // Close the previously opened item
        accordionItems[currentlyOpenIndex]
          .querySelector('.accordion__item-arrow')
          .classList.add('accordion__item-arrow-closed');
        
        // Remove the active class from the content of the previously opened item
        accordionItems[currentlyOpenIndex].querySelector(
        '.accordion__item-image'
        ).classList.remove('active');

        // Remove the "opened" class from the title of the previously opened item
        accordionItems[currentlyOpenIndex]
          .querySelector('.accordion__item-title')
          .classList.remove('opened'); 

        currentlyOpenIndex = index;
        isOpen = true; // Set the current item to open

        // Remove the "closed" class from the current item
        toggleIcon.classList.remove('accordion__item-arrow-closed');

        // Add the "opened" class to the current title
        title.classList.add('opened');
      }

      // Toggle the arrow and content display based on the new state
      toggleIcon.classList.toggle('accordion__item-arrow-opened', isOpen);

      // Toggle the active class
      content.classList.toggle('active', isOpen);
    });
  });
});


// ***** Create the index__projects portfolios *****

export function createPortfolios(containerSelector) {
  // Sample data for portfolio items
  const portfolioData = [
    {
      header: 'Legal Lingua',
      headerImgSrc: '../index/imgs/button-dark.png',
      info: 'We have compiled this portfolio were you can explore a collection of our successful past projects',
      services: ['Web Design', 'B2B', 'Branding'],
      imgSrc: '../index/imgs/legal-lingua.png',
    },
    {
      header: 'Re-Energy',
      headerImgSrc: '../index/imgs/button-dark.png',
      info: 'We have compiled this portfolio were you can explore a collection of our successful past projects',
      services: ['Web Design', 'B2B', 'Web Development'],
      imgSrc: '../index/imgs/re-energy.png',
    },
    {
      header: 'Cabeau',
      headerImgSrc: '../index/imgs/button-dark.png',
      info: 'We have compiled this portfolio were you can explore a collection of our successful past projects',
      services: ['Social Media', 'B2B', 'Branding'],
      imgSrc: '../index/imgs/cabeau.png',
    },
    // Add more items as needed
  ];

  // Get the projects-box element
  const projectsBox = document.createElement('div');
  projectsBox.classList.add('projects-box');

  // Loop through the portfolioData array and create portfolio items
  portfolioData.forEach((item) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('projects-box__portfolio');

    const portfolioInfo = document.createElement('div');
    portfolioInfo.classList.add('projects-box__portfolio-info');

    // Create and add content for portfolio info
    const header = document.createElement('div');
    header.classList.add('portfolio-header');
    header.innerHTML = `<h4>${item.header}</h4><img src="${item.headerImgSrc}" alt="Header Image">`;

    const body = document.createElement('div');
    body.classList.add('portfolio-body');
    body.textContent = item.info;

    const services = document.createElement('div');
    services.classList.add('portfolio-services');
    item.services.forEach(service => {
      const serviceParagraph = document.createElement('p');
      serviceParagraph.textContent = service;
      services.appendChild(serviceParagraph);
    });

    portfolioInfo.appendChild(header);
    portfolioInfo.appendChild(body);
    portfolioInfo.appendChild(services);

    // Create and add content for portfolio image
    const portfolioImg = document.createElement('img'); // Create an img element
    portfolioImg.classList.add('projects-box__portfolio-img');
    portfolioImg.src = item.imgSrc; // Set the source of the image
    portfolioImg.alt = item.header; // Set the alt attribute

    // Append portfolio info and image to the portfolio item
    portfolioItem.appendChild(portfolioInfo);
    portfolioItem.appendChild(portfolioImg);

    // Append portfolio item to the projects box
    projectsBox.appendChild(portfolioItem);
  });

  // Append projects box to the projects container
  containerSelector.appendChild(projectsBox);
}