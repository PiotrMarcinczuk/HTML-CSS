window.onload = () => {
    bookList.init();
};

class BookList{
    constructor(){
        this.list = [];
    }   

    init(){
        const button = document.querySelector('button');
        button.addEventListener('click', (e) => {
            this.buttonClick(e);
        })
        this.loadDataFromStorage()
    }

    buttonClick(e){
        const author = document.getElementById('author').value;
        const bookId = document.getElementById('bookId').value;

        e.preventDefault();

        if(author && bookId){
            const book = new Book(author, bookId);
            bookList.addBook(book);
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
        let elementTable = document.createElement('table');
        let elementCol = document.createElement('tr');
        let elementRow1 = document.createElement('td');
        let elementRow2 = document.createElement('td');
        let elementRow3 = document.createElement('td');
        let elementRow4 = document.createElement('td');
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');
        button1.innerText = 'Up'
        button2.innerText = 'Remove'
        elementDiv.appendChild(elementTable);
        elementTable.appendChild(elementCol);
        elementCol.appendChild(elementRow1);
        elementCol.appendChild(elementRow2);
        elementCol.appendChild(elementRow3);
        elementCol.appendChild(elementRow4);
        elementRow3.appendChild(button1);
        elementRow4.appendChild(button2);

        elementRow1.innerHTML = 'Imię autora: ' + book.name; 
        elementRow2.innerHTML = 'Id książki : ' + book.id;
        main.appendChild(elementDiv);
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
        console.log(data);
        return data;
    }

    loadDataFromStorage(){
        const data = storageTemp.getItems();
        if(data === null || data === undefined) return;
        this.list = data;
        data.forEach((value, index) => {
            bookList.addElement(value);
        })
        console.log(data);
    }

    saveData(){
        storageTemp.setItems(this.list);
    }
}
const bookList = new BookList();

class Book{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }    
}

class Storage{
    setItems(book){
        localStorage.setItem('books', JSON.stringify(book));
    }

    getItems(){
        let booksTemp = null;
        if(localStorage.getItem('books') !== null){
            booksTemp = JSON.parse(localStorage.getItem('books')); // tutaj tylko najnowszy obiekt book poniewaz jest zmienna bookTemp
        }else{
            booksTemp = [];
        }
        return booksTemp;          
    }
}
const storageTemp = new Storage();
