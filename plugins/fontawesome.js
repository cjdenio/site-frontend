import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faBriefcase,
  faLaptopCode,
  faPenAlt,
  faPaperPlane,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faHome,
  faBriefcase,
  faLaptopCode,
  faPenAlt,
  faPaperPlane,
  faGithub,
  faBars,
  faTimes
);

Vue.component('icon', FontAwesomeIcon);
