const certificates = [
  {
    file: 'CSCC2.PNG',
    title: 'CSCC Certificate of Appreciation',
    desc: 'Awarded for outstanding leadership as Head of Robotics, CSCC 2022-2023.'
  },
  {
    file: 'CSCC1.PNG',
    title: 'CSCC Certificate of Coaching',
    desc: 'Recognized for robotics coaching and mentorship, CSCC, Feb-Mar 2024.'
  },
  {
    file: 'NetworkingBasics.PNG',
    title: 'Networking Basics',
    desc: 'Certificate for mastering the basics of computer networking, protocols, and network devices.'
  },
  {
    file: 'Intro CyberSecurity.PNG',
    title: 'Introduction to Cyber Security',
    desc: 'Certificate for completing an introductory course in cyber security, focusing on foundational concepts.'
  },
  {
    file: 'RespWebDes.jpg',
    title: 'Responsive Web Design',
    desc: 'Certificate for completing Responsive Web Design, learning to build mobile-friendly and adaptive websites.'
  },
  {
    file: 'React + Redux.jpg',
    title: 'React + Redux',
    desc: 'Certificate for mastering React and Redux, building modern web applications with state management.'
  },
  {
    file: 'jQuery.jpg',
    title: 'jQuery',
    desc: 'Certificate for learning jQuery, enhancing web pages with dynamic and interactive features.'
  },
  {
    file: 'Python Data Structure.png',
    title: 'Python Data Structure',
    desc: 'Certificate for mastering data structures in Python, including lists, dictionaries, and more.'
  },
  {
    file: 'Python For Beginners.png',
    title: 'Python For Beginners',
    desc: 'Certificate for completing a beginner course in Python programming.'
  },
  {
    file: 'IntroIoT.PNG',
    title: 'Introduction to IoT and Digital Transformation',
    desc: 'Cisco Networking Academy certificate for IoT and Digital Transformation.'
  },
  {
    file: 'IntroModernAI.PNG',
    title: 'Introduction to Modern AI',
    desc: 'Cisco Networking Academy certificate for Modern AI.'
  },
  {
    file: 'IntroDataScience.PNG',
    title: 'Introduction to Data Science',
    desc: 'Cisco Networking Academy certificate for Data Science.'
  },
  {
    file: 'Team02.jpg',
    title: 'Certificate of Participation - MINI STARTUP CSCC',
    desc: 'Awarded for participating in MINI STARTUP CSCC event, February 21-24, 2022.'
  }
];

const container = document.getElementById('certificates-container');

certificates.forEach(cert => {
  const card = document.createElement('div');
  card.className = 'certificate-card';

  const img = document.createElement('img');
  img.src = cert.file;
  img.alt = cert.title;
  img.className = 'certificate-image';

  const info = document.createElement('div');
  info.className = 'certificate-info';

  const title = document.createElement('div');
  title.className = 'certificate-title';
  title.textContent = cert.title;

  const desc = document.createElement('div');
  desc.className = 'certificate-desc';
  desc.textContent = cert.desc;

  info.appendChild(title);
  info.appendChild(desc);

  card.appendChild(img);
  card.appendChild(info);

  // Attach the click event here!
  card.onclick = () => openModal(cert);

  container.appendChild(card);
});

// Modal logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalClose = document.getElementById('modal-close');

function openModal(cert) {
  modal.style.display = 'block';
  modalImg.src = cert.file;
  modalImg.alt = cert.title;
  modalCaption.textContent = cert.title + ' - ' + cert.desc;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  modalImg.src = '';
  document.body.style.overflow = '';
}

modalClose.onclick = closeModal;
modal.onclick = function(e) {
  if (e.target === modal) closeModal();
};
document.addEventListener('keydown', function(e) {
  if (modal.style.display === 'block' && (e.key === 'Escape' || e.key === 'Esc')) {
    closeModal();
  }
}); 