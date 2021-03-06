const speakersBoxes = document.querySelector('.speakers-boxes');
const players = [
  {
    playerName: 'David Gilmour',
    title: 'Lead Guitarist',
    description: 'Join our community now and play the guitar along with David Gilmour',
    imagePath: './images/Untitled design (1).png',
  },
  {
    playerName: 'Mark Lettieri',
    title: 'Lead Guitarist',
    description: 'Mark is the lead guitarist for Snarky Puppy, and he is willing to teach you more about Music theory',
    imagePath: './images/Untitled design (6).png',
  },
  {
    playerName: 'Eric Clapton',
    title: 'Lead Guitarist',
    description: 'Join us now and listen to the best tunes from the best guitarists of all time',
    imagePath: './images/Untitled design (7).png',
  },
  {
    playerName: 'Chris Wolstenholme',
    title: 'Bassist',
    description: 'Chris will join our gathering and play the best rifs along side with you',
    imagePath: './images/Untitled design (8).png',
  },
];

players.forEach((player) => {
  const speakerInfo = document.createElement('div');
  speakersBoxes.appendChild(speakerInfo);
  speakerInfo.classList.add('speaker-info');
  speakerInfo.innerHTML = `
  <div class="speaker-left">
    <img src="${player.imagePath}" alt="">
  </div>
  <div class="speaker-right">
    <h3>${player.playerName}</h3>
    <h5 class="speaker-underline">${player.title}</h5>
    <p>
      ${player.description} 
    </p>
  </div>`;
});