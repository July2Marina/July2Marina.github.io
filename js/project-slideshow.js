 let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
  // Go to first project, after clicking forward from last button
  if (num > project.length) {
    slideIndex = 1;
  }
  // Go to last project, when clicking backwards from first project
  if (num < 1) {
    slideIndex = project.length;
  }
  // For loop to hide all the projects
  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  // Change the slideIndex based on back or forward arrow
  showProject((slideIndex += num));
}
// === Overlay-Logic für Projektkarten ===
document.querySelectorAll('.project').forEach((card) => {
  const infoBtn = card.querySelector('.btn--info');
  const overlay = card.querySelector('.project__overlay');
  const closeBtn = card.querySelector('.overlay__close');

  if (infoBtn && overlay) {
    infoBtn.addEventListener('click', () => {
      card.classList.add('show-info');
      // Optional: für Screenreader
      infoBtn.setAttribute('aria-expanded', 'true');
    });
  }

  // Close via Button
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.classList.remove('show-info');
      const infoBtn = card.querySelector('.btn--info');
      if (infoBtn) infoBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Close, wenn man außerhalb des Dialogs klickt
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) {
      card.classList.remove('show-info');
      const infoBtn = card.querySelector('.btn--info');
      if (infoBtn) infoBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // ESC schließt Overlay
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && card.classList.contains('show-info')) {
      card.classList.remove('show-info');
      const infoBtn = card.querySelector('.btn--info');
      if (infoBtn) infoBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
