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
  

// const seeProjectDetail = document.querySelectorAll('.see-project-btn');
// const projectDetail = document.querySelector('.project-detail');

// const projects = [
//   {
//     id: '1',
//     name: 'Space Traveler\'s HUB',
//     description: 'Welcome to Space Traveler\'s HUB, this web app allows the user to take a fictional tour across the space. The user can choose a rocket from our catalog interface, and reserve it. Also, the user can see recent special missions and join them. Finally, the user will be able to keep track of all your rockets and mission they are subscribed to.',
//     featured_image: './Images/space-travelers-hub-preview.png',
//     link_to_live: ['See live', './Images/detailProjectLive.png', 'https://react-space-travelers-hub.herokuapp.com/'],
//     link_to_source: ['See source', './Images/detailProjectGit.png', 'https://github.com/Mre55/space-travelers-hub'],
//     technologies: ['React', 'Redux', 'React-Router', 'TailwindCSS', 'Webpack'],
//     name_detail: ['Mihreteab M. & William Morales', 'Front-End Dev', '2022'],
//   },
//   {
//     id: '2',
//     name: 'Bookstore CMS',
//     description: 'The "Bookstore CMS" website displays a list of books via Bookstore API and allows users to add and remove books from the UI. Bookstore API, React, and Redux were used to build the website.',
//     featured_image: 'https://user-images.githubusercontent.com/34578631/150406323-95869d53-2b47-49b6-aceb-d4e0535c78da.png',
//     link_to_live: ['See live', './Images/detailProjectLive.png', 'https://mre55.github.io/bookstore/'],
//     link_to_source: ['See source', './Images/detailProjectGit.png', 'https://github.com/Mre55/bookstore'],
//     technologies: ['React', 'Redux', 'React-Router', 'Bookstore API', 'Webpack'],
//     name_detail: ['Mihreteab M.', 'Front-End Dev', '2021'],
//   },
//   {
//     id: '3',
//     name: 'Microvago',
//     description: 'It’s a hotel booking full-stack application. That allows users to reserve hotel rooms all around the globe. Also, it\'s always admin to add and delete hotels.',
//     featured_image: 'https://raw.githubusercontent.com/Omar-Muhamad/final-capstone-react-frontend/main/src/img/screenshot3.png',
//     link_to_live: ['See live', './Images/detailProjectLive.png', 'https://microvago.netlify.app/'],
//     link_to_source: ['See source', './Images/detailProjectGit.png', 'https://github.com/Omar-Muhamad/Final-Capstone-React-Frontend'],
//     technologies: ['React', 'Redux Toolkit', 'Ruby on Rails', 'PostgreSQL', 'JWT'],
//     name_detail: ['Contributors: Mihreteab Misganaw, Shady Shawkat, Luis Abarca, <br /> Omar Muhammad and Santiago Velosa', 'Full-stack website', '2022'],
//   },
//   {
//     id: '4',
//     name: 'To Do App',
//     description: 'This project is about a basic website that allows users to add/remove books from a list. And also the content dynamically modifies the DOM and adds basic events.',
//     featured_image: './Images/work-img-four.jpeg',
//     link_to_live: ['See live', './Images/detailProjectLive.png', 'https://mre55.github.io/To-Do-App/'],
//     link_to_source: ['See source', './Images/detailProjectGit.png', 'https://github.com/Mre55/To-Do-App'],
//     technologies: ['html', 'css', 'javaScript', 'Git', 'Webpack'],
//     name_detail: ['Mihreteab M.', 'Front-End Dev', '2021'],
//   },
// ];



// seeProjectDetail.forEach((button) => {
//     button.addEventListener('click', (e) => {
//       const selectedProject = projects.filter((project) => project.id === e.target.id)[0];
//       projectDetail.classList.add('active');
//       mainTag.classList.add('fixed_postion');
//       header.classList.add('fixed_postion');
  
//       projectDetail.innerHTML = `
//           <div class="project-detail-background"></div>
//           <article class="work-container flex project-detail-article project-flex">
//               <div class="project-detail-header">
//                 <h3>${selectedProject.name}</h3>
//                 <button data-close-button class="close-button-project">&times;</button>
//              </div>
//              <div class="client-des">
//                 <ul class="client-name">
//                   <li>${selectedProject.name_detail[0]}</li>
//                 </ul>
//                 <ul>
//                   <li>${selectedProject.name_detail[1]}</li>
//                 </ul>
//                 <ul>
//                   <li>${selectedProject.name_detail[2]}</li>
//                 </ul>
//               </div>
//             <div class="work-img" style="background: url(${selectedProject.featured_image});
//             background-size: cover; width: auto"></div>
//             <div class="work-description-project project-detail-work-description">
//               <p>
//                 ${selectedProject.description}
//               </p>
//               <div class="project-detail-tech-btns">
//               <ul class="buttons project-detail-buttons">
//                 <li><button type="button">${selectedProject.technologies[0]}</button></li>
//                 <li><button type="button">${selectedProject.technologies[1]}</button></li>
//                 <li><button type="button">${selectedProject.technologies[2]}</button></li>
//                 <li><button type="button">${selectedProject.technologies[3]}</button></li>
//                 <li><button type="button">${selectedProject.technologies[4]}</button></li>
//               </ul>
//               <div class="project-detail-buttons">
//                   <a href="${selectedProject.link_to_live[2]}"><button class="see-project-btn see-source">${selectedProject.link_to_live[0]}
//                     <img class="see-source-img" src=${selectedProject.link_to_live[1]} alt="" /></button>
//                   </a>
//                   <a href="${selectedProject.link_to_source[2]}"><button class="see-project-btn see-source">${selectedProject.link_to_source[0]}
//                     <img class="see-source-img" src=${selectedProject.link_to_source[1]} alt="" /></button>
//                   </a>
//               </div>
//               </div>
//             </div>
//           </article>
//           `;
  
//       const projectDetailClose = document.querySelector('.close-button-project');
//       projectDetailClose.addEventListener('click', () => {
//         mainTag.classList.remove('fixed_postion');
//         header.classList.remove('fixed_postion');
//         projectDetail.classList.remove('active');
//       });
//     });
//   });