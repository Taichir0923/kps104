var BudgetApp = /** @class */ (function () {
    function BudgetApp() {
        this.showModal = document.querySelector('#showModal');
        this.backdrop = document.querySelector('.backdrop');
        this.closeModal = document.querySelector('#closeModal');
        this.filter = document.querySelector('#filter');
        this.events();
    }
    BudgetApp.prototype.openModal = function () {
        this.backdrop.classList.add('open');
    };
    BudgetApp.prototype.hideModal = function () {
        this.backdrop.classList.remove('open');
    };
    BudgetApp.prototype.filtering = function () {
        console.log(this.filter.value);
    };
    BudgetApp.prototype.events = function () {
        this.showModal.addEventListener('click', this.openModal.bind(this));
        this.closeModal.addEventListener('click', this.hideModal.bind(this));
        this.filter.addEventListener('change', this.filtering.bind(this));
    };
    return BudgetApp;
}());
var app = new BudgetApp();
// 
