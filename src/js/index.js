import '../../node_modules/bootstrap/js/src/dropdown';

import '../styles/index.scss';
import './sub-header/sub-header.js';
import Burger from '../js/burger/burger';
import getSubHeader from './sub-header/sub-header';

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.js-header__burger').forEach(elem => new Burger(elem));
  getSubHeader();
});