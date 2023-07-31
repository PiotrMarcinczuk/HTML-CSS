window.onload = () => {
    instance.init();
    instance.input.addEventListener('input', (e) => {
        instance.value = e.target.value;
        instance.connect();
    })
}

class List{
    init(){
        this.input = document.getElementById('search');
        this.button = document.getElementById('search-button');
        this.value = null;
    }

    connect(){
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.value}&apikey=D83PCD5HRM9R5PNO`)
        .then(response => response.json())
        .then( this.addHtmlElement )
    }

    addHtmlElement(data){
        const list = data.bestMatches;
        list.forEach( (el) => {
            instance.createElement(el['1. symbol']);
        })
    }

    createElement(data){
        const ul = document.querySelector('ul');
        let li = document.createElement('li');
        li.innerHTML = data;

        ul.appendChild(li);
    }
}

const instance = new List();

