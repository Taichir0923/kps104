interface Budget {
    description: string,
    amount: number,
    type: string,
    date: string,
    id: string
}

class BudgetApp {
    private showModal:HTMLButtonElement;
    private backdrop: HTMLDivElement;
    private closeModal: HTMLButtonElement;
    private filter: HTMLSelectElement;
    
    private budgets: Budget[];

    constructor(){
        this.showModal = document.querySelector('#showModal')! as HTMLButtonElement;
        this.backdrop = document.querySelector('.backdrop')! as HTMLDivElement;
        this.closeModal = document.querySelector('#closeModal')! as HTMLButtonElement;
        this.filter = document.querySelector('#filter')! as HTMLSelectElement;

        this.events()
    }

    private openModal():void {
        this.backdrop.classList.add('open');
    }

    private hideModal():void {
        this.backdrop.classList.remove('open');
    }

    private filtering():void {
        console.log(this.filter.value);
    }

    private events():void {
        this.showModal.addEventListener('click' , this.openModal.bind(this));

        this.closeModal.addEventListener('click' , this.hideModal.bind(this));

        this.filter.addEventListener('change' , this.filtering.bind(this))
    }
}

const app = new BudgetApp();

// 