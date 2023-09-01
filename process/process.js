//  ***** Create the phase divs below the hero *****

function createPhase(phaseData) {
  const phase = document.createElement('div');
  phase.classList.add('process__phase', `process__phase-${phaseData.id}`);

  const imgNumDiv = document.createElement('div');
  imgNumDiv.className = 'phase__imgNumHeader';

  const img = document.createElement('img');
  img.src = phaseData.imageSrc;
  img.alt = phaseData.imageAlt;

  const h4Number = document.createElement('h4');
  h4Number.textContent = phaseData.number;

  imgNumDiv.appendChild(img);
  imgNumDiv.appendChild(h4Number);

  const bodyDiv = document.createElement('div');
  bodyDiv.className = 'phase__body';

  const h4Title = document.createElement('h4');
  h4Title.textContent = phaseData.title;

  const pDescription = document.createElement('p');
  pDescription.textContent = phaseData.description;

  bodyDiv.appendChild(h4Title);
  bodyDiv.appendChild(pDescription);

  phase.appendChild(imgNumDiv);
  phase.appendChild(bodyDiv);

  return phase;
}

document.addEventListener('DOMContentLoaded', () => {
  const processPhasesContainer = document.querySelector('.process__phases-container');

  const phasesData = [
    {
      id: 'discovery',
      number: '01',
      title: 'Discovery Phase',
      description: 'You will be contacted for a consultation, during which we will discuss all details regarding the project.',
      imageSrc: '../process/imgs/discover.png',
      imageAlt: 'Discovery Image'
    },
    {
      id: 'design',
      number: '02',
      title: 'Design Phase',
      description: 'You will be presented will multiple concepts to be discussed. Together we will select the best fit for the project.',
      imageSrc: '../process/imgs/design.png',
      imageAlt: 'Design Image'
    },
    {
      id: 'development',
      number: '03',
      title: 'Development Phase',
      description: 'The design will be translated into Wordpress in such a format that allows you to control your own content. ',
      imageSrc: '../process/imgs/development.png',
      imageAlt: 'Development Image'
    },
    // Add more phases as needed
  ];


  const processPhaseSection = document.querySelector('.process__phase');
  
  phasesData.forEach(phaseData => {
    const phaseElement = createPhase(phaseData);
    
    processPhaseSection.appendChild(phaseElement);
    processPhasesContainer.appendChild(processPhaseSection);
  });
});

