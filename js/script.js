const DATA = [

  {
    showAllStatus: 0,
  },
  {
    image: './images/Dr._Okoe_ Boye.jpg',
    name: 'Dr. Benard Okoe Boye',
    role: 'CEO of Ghana’s National Health Insurance Authority',
    profile: 'Dr. Bernard Okoe Boye is the CEO of Ghana’s National Health Insurance Authority. He is a Medical Practitioner and a Politician. Throughout his career, Dr. Okoe Boye has been passionately committed to making a difference in people’s lives. ',
  },
  {
    image: './images/Dr._Matshidiso_Moeti.jpg',
    name: 'Dr. Mathsidiso Moeti',
    role: 'WHO Regional Director Africa',
    profile: 'Dr Matshidiso Moeti, from Botswana, is the first woman to be elected as WHO Regional Director for Africa. Over the past five years, Dr Moeti has led the transformation of WHO in Africa to ensure the Organization is accountable, effective and driven by results.',
  },
  {
    image: './images/Dr._Kweku_Agyeman_ Menu.jpg',
    name: 'Hon. Kwaku Agyeman Menu',
    role: 'Minister of Health, Ghana',
    profile: ' He is a product of the University of Ghana where he had his BSc. Degree in Economics and Statistics. He also attended the London School of Accountancy where he chartered as a management accountant. He is an affable and astute politician and served in various leadership positions in Government between (2001-2009).',
  },
  {
    image: './images/Nniel.jpg',
    name: 'Nneile Nkholise ',
    role: 'Founder/CEO, iMed Tech',
    profile: ' Nneile Nkholise is a Lesotho-born medical practitioner using technology to solve health crises. She launched iMed Tech, a biotechnology company specialising in the design and manufacturing of custom-made medical solutions to improve the lives of Africans.',
  },
  {
    image: './images/keller.jpg',
    name: 'Keller Rinaudo Cliffton',
    role: 'Co-founder/CEO, Zipline',
    profile: 'Keller Rinaudo is CEO and co-founder of Zipline, the world’s first drone delivery service whose focus is delivering life saving medicine even to the most difficult to reach places on earth. Prior to Zipline, he was a software engineer and a professional rock climber. A graduate of Harvard University, he built computers out of RNA and DNA that can operate in human cells as molecular doctors. ',
  },
  {
    image: './images/Zineb.jpg',
    name: 'Zineb Drissi-Kaitouni ',
    role: 'Co-Founder/CEO, DabaDoc',
    profile: 'Since 2014, DabaDoc, an online platform has been helping patients to book an appointment with a doctor in a few clicks. More than 3,000 doctors use the platform across Morocco, Algeria, Tunisia, Nigeria and South Africa.',
  },

];

function showSpeakerCards() {
  const speaker = document.querySelector('.speaker-cards-box');
  if (DATA[0].showAllStatus === 0) {
    for (let i = 1; i <= 2; i++) {
      speaker.innerHTML += `<div class="speaker-card">
        <div class="speaker-img-box">
          <img class="checkers" src="./images/checkers.png" alt="" />
          <img class="speaker-img" src="${DATA[i].image}" alt="" />
        </div>
        <div class="speaker-info">
          <h3 class="name">${DATA[i].name}</h3>
          <p class="role">${DATA[i].role}</p>
          <hr />
          <p class="profile">
            ${DATA[i].profile}
          </p>
        </div>
      </div>`;
    }
  } else {
    for (let i = 1; i < DATA.length; i++) {
      speaker.innerHTML += `<div class="speaker-card">
        <div class="speaker-img-box">
          <img class="checkers" src="./images/checkers.png" alt="" />
          <img class="speaker-img" src="${DATA[i].image}" alt="" />
        </div>
        <div class="speaker-info">
          <h3 class="name">${DATA[i].name}</h3>
          <p class="role">${DATA[i].role}</p>
          <hr />
          <p class="profile">
            ${DATA[i].profile}
          </p>
        </div>
      </div>`;
    }
  }
}

function toggleButtonHide(id) {
  document.querySelector(id).classList.toggle('hidden');
}

const moreButton = document.querySelector('.more-btn');
moreButton.addEventListener('click', (event) => {
  DATA[0].showAllStatus = 1;
  document.querySelector('.speaker-cards-box').innerHTML = '';
  showSpeakerCards();
  toggleButtonHide('.more-btn');
  toggleButtonHide('.less-btn');
  event.preventDefault();
});

const lessButton = document.querySelector('.less-btn');
lessButton.addEventListener('click', (event) => {
  DATA[0].showAllStatus = 0;
  document.querySelector('.speaker-cards-box').innerHTML = '';
  showSpeakerCards();
  toggleButtonHide('.more-btn');
  toggleButtonHide('.less-btn');
  event.preventDefault();
});