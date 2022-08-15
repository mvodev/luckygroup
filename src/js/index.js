import '../../node_modules/bootstrap/js/src/dropdown';

import '../styles/index.scss';
import './burger/burger.js';
import './sub-header/sub-header.js';
import getSubHeader from '../js/sub-header/sub-header';
import Burger from './burger/burger';

document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll('.js-header__burger').forEach(elem => new Burger(elem));
	getSubHeader();

});