
                let word_title = document.querySelector("#word_title");
                let word_text = document.querySelector("#word_text");

                let slownik = document.getElementById("slownik");
                
                let letters = []; //tablica pierwszych liter, które już wystąpiły

                let tab = JSON.parse(localStorage.getItem("slownik") || "[]");
                tab.sort((a, b) => a.title.localeCompare(b.title)); //alfabetyczne sortowanie 
                function sznycowanie(){
                    let title_f = word_title.value; //tytuł naszego słowa
                    let text_f = word_text.value;   //opis naszego słowa
                    if(!tab.some(x => x.title_f === title_f)){ //sprawdzenie czy wpisany tytuł występuje już w tabeli
                        tab.push({title: title_f, text: text_f});
                        localStorage.setItem("slownik", JSON.stringify(tab)); 
                    } 
                }

                for(let i=0; i<tab.length; i++){
                    let temp = tab[i].title;
                    let first = temp.charAt(0).toUpperCase();
                    
                    if (!letters.includes(first)){   //sprawdzenie czy już nie ma takiej wielkiej Litery jako tytulu
                        letters.push(first);
                        let header_div = document.createElement("div");
                        header_div.textContent = first;
                        slownik.appendChild(header_div); //dodanie do sekcji słownik elementu zawierającego wielka litere
                        header_div.style.margin = "20px 0 0 0";
                    }

                    let area = document.createElement("p"); // towrzenie obszaru ze słowem i jego wyjaśnieniem
                    area.textContent = tab[i].title + " - " + tab[i].text;
                    slownik.appendChild(area);
                }

                function removeWord(title) {   //funkcja pomocnicza do usuwania słów
                    tab = tab.filter(word => word.title !== title);
                    localStorage.setItem("slownik", JSON.stringify(tab));
                }
