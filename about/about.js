// Create team content boxes

export function createContentBoxes() {
  
  // Create the first div
  const deyvida = document.createElement('div');
  deyvida.classList.add('team__content-box');

  const deyvidaImg1 = document.createElement('img');
  deyvidaImg1.src = '../about/imgs/deyvid.jpg';
  deyvida.appendChild(deyvidaImg1);

  const deyvidaH4 = document.createElement('h4');
  deyvidaH4.textContent = 'Deyvid Cherkezov';
  deyvida.appendChild(deyvidaH4);

  // Create a white line
  const whiteLine1 = document.createElement('div');
  whiteLine1.className = 'white-line';
  deyvida.appendChild(whiteLine1);

  const deyvidaP = document.createElement('p');
  deyvidaP.textContent = 'Head of Development';
  deyvida.appendChild(deyvidaP);

  // Create the second div
  const designer = document.createElement('div');
  designer.classList.add('team__content-box');

  const designerImg = document.createElement('img');
  designerImg.src = '../about/imgs/photo.png';
  designer.appendChild(designerImg);

  const designerH4 = document.createElement('h4');
  designerH4.textContent = 'Zornitsa Ilieva';
  designer.appendChild(designerH4);

  // Create a white line
  const whiteLine2 = document.createElement('div');
  whiteLine2.className = 'white-line';
  designer.appendChild(whiteLine2);

  const designerP = document.createElement('p');
  designerP.textContent = 'Head of Design';
  designer.appendChild(designerP);

  // Create an array to hold the content boxes
  const contentBoxes = [deyvida, designer];

  // Create a container div for the content boxes
  const teamContainer = document.createElement('div');
  teamContainer.classList.add('about-us__team-container');

  // Append the content boxes to the container
  contentBoxes.forEach(contentBox => {
    teamContainer.appendChild(contentBox);
  });

  return teamContainer; // Return the container
}
