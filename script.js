const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener ("click", () =>{

    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach( n => n. 
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    })
)


function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector('small');
    msg.innerText = message;
    return type;
  }
  
  function showError(input, message) {
    return showMessage(input, message, false);
  }
  
  function showSuccess(input) {
    return showMessage(input, '', true);
  }
  
  function hasValue(input, message) {
    if (input.value.trim() === '') {
      return showError(input, message);
    }
    return showSuccess(input);
  }
  
  function validateEmail(input, invalidMsg) {
    if (!hasValue(input, invalidMsg)) {
      return false;
    }
    const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  
    const email = input.value.trim();
    if (!emailRegex.test(email)) {
      return showError(input, invalidMsg);
    }
    return true;
  }
  
  const form = document.querySelector('#myForm');
  const EMAIL_INVALID = 'Please enter a correct email address format. Uppercase not allowed in this field!!';
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
    if (emailValid) {
      form.submit();
    }
  });

const mainTag = document.querySelector('.main');
const header = document.querySelector('.header');
const seeProjectDetail = document.querySelectorAll('.see-project-btn');
const projectDetail = document.querySelector('.project-detail');

const projects = [
  {
    id: '1',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    featured_image: './Images/Snapshoot.png',
    link_to_live: ['See live', './Images/detailProjectLive.png', '#'],
    link_to_source: ['See source', './Images/detailProjectGit.png', '#'],
    technologies: ['html', 'css', 'javascript', 'react'],
    name_detail: ['Canopy', 'Back-End Dev', '2015'],
  },
  {
    id: '2',
    name: 'Multi-post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './Images/Snapshoot.png',
    link_to_live: ['See live', './Images/detailProjectLive.png', '#'],
    link_to_source: ['See source', './Images/detailProjectGit.png', '#'],
    technologies: ['html', 'css', 'javascript'],
    name_detail: ['Abel Seifu', 'Front-End Dev', '2022'],
  },
  {
    id: '3',
    name: 'Tonic 3',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './Images/Snapshoot.png',
    link_to_live: ['See live', './Images/detailProjectLive.png', '#'],
    link_to_source: ['See source', './Images/detailProjectGit.png', '#'],
    technologies: ['html', 'css', 'javascript'],
    name_detail: ['Abel Seifu', 'Front-End Dev', '2022'],
  },
  {
    id: '4',
    name: 'Tonic 4',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './Images/Snapshoot.png',
    link_to_live: ['See live', './Images/detailProjectLive.png', '#'],
    link_to_source: ['See source', './Images/detailProjectGit.png', '#'],
    technologies: ['html', 'css', 'javaScript', 'Git', 'Webpack'],
    name_detail: ['Abel Seifu', 'Front-End Dev', '2022'],
  },
];

seeProjectDetail.forEach((button) => {
  button.addEventListener('click', (e) => {
    const selectedProject = projects.filter((project) => project.id === e.target.id)[0];
    projectDetail.classList.add('active');
    mainTag.classList.add('fixed_postion');
    header.classList.add('fixed_postion');
    projectDetail.innerHTML = `
        <div class="project-detail-background"></div>
        <article class="work-container flex project-detail-article project-flex">
            <div class="project-detail-header">
              <h3>${selectedProject.name}</h3>
              <button data-close-button class="close-button-project">&times;</button>
           </div>
           <div class="client-des">
              <ul class="client-name">
                <li>${selectedProject.name_detail[0]}</li>
              </ul>
              <ul>
                <li>${selectedProject.name_detail[1]}</li>
              </ul>
              <ul>
                <li>${selectedProject.name_detail[2]}</li>
              </ul>
            </div>
          <div class="work-img" style="background: url(${selectedProject.featured_image});
          background-size: cover; width: auto"></div>
          <div class="work-description-project project-detail-work-description">
            <p>
              ${selectedProject.description}
            </p>
            <div class="project-detail-tech-btns">
            <ul class="buttons project-detail-buttons">
              <li><button type="button">${selectedProject.technologies[0]}</button></li>
              <li><button type="button">${selectedProject.technologies[1]}</button></li>
              <li><button type="button">${selectedProject.technologies[2]}</button></li>
              <li><button type="button">${selectedProject.technologies[3]}</button></li>
            </ul>
            <div class="project-detail-buttons">
                <a href="${selectedProject.link_to_live[2]}"><button class="see-project-btn see-source">${selectedProject.link_to_live[0]}
                  <img class="see-source-img" src=${selectedProject.link_to_live[1]} alt="" /></button>
                </a>
                <a href="${selectedProject.link_to_source[2]}"><button class="see-project-btn see-source">${selectedProject.link_to_source[0]}
                  <img class="see-source-img" src=${selectedProject.link_to_source[1]} alt="" /></button>
                </a>
            </div>
            </div>
          </div>
        </article>
        `;
    const projectDetailClose = document.querySelector('.close-button-project');
    projectDetailClose.addEventListener('click', () => {
      mainTag.classList.remove('fixed_postion');
      header.classList.remove('fixed_postion');
      projectDetail.classList.remove('active');
    });
  });
});
const fullNameForm = document.getElementById('fullName');
const emailForm = document.getElementById('email');
const commentForm = document.getElementById('comment');

function handleChange{} {
  const formData = {
    fullName: fullNameForm.value,
    email: emailForm.value,
    comment: commentForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}