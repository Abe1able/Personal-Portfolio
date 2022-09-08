const mainTag = document.querySelector('.main');
const header = document.querySelector('.header');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-btn');
const showMobileMenu = document.querySelector('.mobile-menu');

const seeProjectDetail = document.querySelectorAll('.see-project-btn');
const projectDetail = document.querySelector('.project-detail');

const projects = [
  {
    id: '1',
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './Images/Portfolio.png',
    link_to_live: ['See live', './Images/detailProjectLive.png', '#'],
    link_to_source: ['See source', './Images/detailProjectGit.png', '#'],
    technologies: ['html', 'css', 'javascript'],
    name_detail: ['Abel Seifu', 'Back-End Dev', '2022'],
  },
  {
    id: '2',
    name: 'Multi-post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './Images/Portfolio2.png',
    link_to_live: ['See live', './Images/detailProjectLive.png', '#'],
    link_to_source: ['See source', './Images/detailProjectGit.png', '#'],
    technologies: ['html', 'css', 'javascript'],
    name_detail: ['Abel Seifu', 'Front-End Dev', '2022'],
  },
  {
    id: '3',
    name: 'Tonic 3',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './Images/Portfolio3.png',
    link_to_live: ['See live', './Images/detailProjectLive.png', '#'],
    link_to_source: ['See source', './Images/detailProjectGit.png', '#'],
    technologies: ['html', 'css', 'javascript'],
    name_detail: ['Abel Seifu', 'Front-End Dev', '2022'],
  },
  {
    id: '4',
    name: 'Tonic 4',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './Images/Portfolio4.png',
    link_to_live: ['See live', './Images/detailProjectLive.png', '#'],
    link_to_source: ['See source', './Images/detailProjectGit.png', '#'],
    technologies: ['html', 'css', 'javaScript', 'Git', 'Webpack'],
    name_detail: ['Abel Seifu', 'Front-End Dev', '2022'],
  },
];

