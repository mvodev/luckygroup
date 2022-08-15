class Burger {

  constructor(burger) {
    this.burger = burger;
    this._getElems()
    this._bindEvents();
  }

  _getElems() {
    this.nav = this.burger.parentNode.querySelector('.js-header__nav');
    this.body = document.querySelector('.js-wrapper');
  }

  _bindEvents() {
    this.burger.addEventListener('pointerdown', this._handleBurgerClick.bind(this));
  }
  
  _handleBurgerClick(e) {
    this.burger.classList.toggle('burger_is-opened');
    this.nav.classList.toggle('header__nav_is-opened');
    this.body.classList.toggle('burger_is-opened');
  }
  
}
export default Burger;