window.onload = () => {
    bookList.init();
};

class BookList{
    constructor(){
        this.list = [];
        this.author = document.getElementById('author'); // nie moze byc .value bo byloby to jednorazowe przypisanie
        this.bookId = document.getElementById('bookId');
    }   

    init(){
        const button = document.querySelector('button');
        button.addEventListener('click', (e) => {
            this.buttonClick(e);
        })
        this.loadDataFromStorage()
    }

    buttonClear(){
        this.author.value = '';
        this.bookId.value = '';
    }

    buttonClick(e){
        e.preventDefault();

        if(this.author.value && this.bookId.value){
            const book = new Book(this.author.value, this.bookId.value);
            bookList.addBook(book);
            this.buttonClear();
        }
    }

    addBook(book){ 
        storageTemp.setItems(book); // tu musi byc book bo linie nizej pobieramy wartosc ze storage
        const item = bookList.loadData();
        bookList.addToList(item);     
    }
    
    addElement(book){
        const main = document.querySelector('main');
        let elementDiv = document.createElement('div');
        let elementTable = document.querySelector('table');

        let elementCol = document.createElement('tr');
        let elementRow1 = document.createElement('td');
        let elementRow2 = document.createElement('td');
        let elementRow3 = document.createElement('td');
        let elementRow4 = document.createElement('td');
        let buttonUp = document.createElement('button');
        let buttonRemove = document.createElement('button');
        buttonUp.innerText = 'Up';
        buttonRemove.innerText = 'Remove';
        elementDiv.appendChild(elementTable);
        elementTable.appendChild(elementCol);
        elementCol.appendChild(elementRow1);
        elementCol.appendChild(elementRow2);
        elementCol.appendChild(elementRow3);
        elementCol.appendChild(elementRow4);
        elementRow3.appendChild(buttonUp);
        elementRow4.appendChild(buttonRemove);

        elementRow1.innerHTML = 'Imię autora: ' + book.name; 
        elementRow2.innerHTML = 'Id książki : ' + book.id;
        main.appendChild(elementDiv);

        buttonRemove.addEventListener('click', () => { // usuwanie pr zyciskiem remove
            //usuwamy tez z localStorage
            const t = storageTemp.getItems();
            for(let [key, value] of t.entries()){
                if(value.name === book.name){
                    elementTable.remove(elementCol);
                    bookList.list.splice(key,1);
                }
            }
            this.saveData();
        });

        buttonUp.addEventListener('click', () => {
            const t = storageTemp.getItems();
            for(let [key, value] of this.list.entries()){
                if(value.listId === book.listId){
                    if(key >= 1){
                        console.log(this.list[key]);
                        let temp = this.list[key-1];               
                        this.list[key-1] = this.list[key];
                        this.list[key] = temp;
                    }
                }   
            }
            this.saveData();
            this.deleteAll();
            this.loadDataFromStorage();
        })
    }

    addToList(book){
        if(this.list.length === 0){
            this.list.push(book)
            this.addElement(book);
        }
        const isDuplicate = this.list.some((existingBook) => {
            return existingBook.name === book.name && existingBook.id === book.id;
        });

        if(!isDuplicate){
            this.list.push(book);
            this.addElement(book);
        } 
        this.saveData();
    }

    loadData(){
        const data = storageTemp.getItems();
        return data;
    }

    loadDataFromStorage(){
        const data = storageTemp.getItems();
        if(data === null || data === undefined) return;
        this.list = data;
        data.forEach((value, index) => {
            bookList.addElement(value);
        })
    }

    saveData(){
        storageTemp.setItems(this.list);
    }

    deleteAll(){
        const tableRows = document.querySelectorAll('table tr');
        tableRows.forEach( (el) => {
            el.remove();
        })
    }
}
const bookList = new BookList();

class Book{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.listId = Book.getNextId();
    }    

    static listId = 0;
    static getNextId(){
        const id = Book.listId;
        Book.listId++;
        return id;
    }
}

class Storage{
    setItems(book){
        localStorage.setItem('books', JSON.stringify(book));
    }

    getItems(){ // w momencie wczytywanie na poczatku z LocalStorage zmienna booksTemp zawiera cala liste ksiazek
        // a jesli chcemy dodac nowa ksiazke po kliknieciu to zmienna zawiera najnowsza ksiazke
        let booksTemp = null;
        if(localStorage.getItem('books') !== null){
            booksTemp = JSON.parse(localStorage.getItem('books')); 
        }else{
            booksTemp = [];
        }
        return booksTemp;          
    }
}
const storageTemp = new Storage();
