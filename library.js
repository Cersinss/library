// Создание структуры данных книги
function Book(title, author, year, genre, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.pages = pages;
  }
  
  // Добавление книги в библиотеку
  function addBook(title, author, year, genre, pages) {
    library.push(new Book(title, author, year, genre, pages));
  }
  
  // Удаление книги из библиотеки
  function removeBook(title) {
    library = library.filter(book => book.title !== title);
  }
  
  // Поиск книг по автору
  function findBooksByAuthor(author) {
    return library.filter(book => book.author === author);
  }
  
  // Фильтрация книг по жанру
  function filterBooksByGenre(genre) {
    return library.filter(book => book.genre === genre);
  }
  
  // Генерация отчета о количестве книг каждого жанра
  function genreReport() {
    let genreCount = {};
    library.forEach(book => {
      if (!genreCount[book.genre]) {
        genreCount[book.genre] = 1;
      } else {
        genreCount[book.genre]++;
      }
    });
    return genreCount;
  }
  
  // Генерация отчета о среднем количестве страниц
  function averagePagesReport() {
    let totalPages = 0;
    library.forEach(book => {
      totalPages += book.pages;
    });
    return totalPages / library.length;
  }
  
  // Сортировка книг по году издания
  function sortBooksByYear() {
    return library.sort((a, b) => a.year - b.year);
  }
  
  // Инициализация библиотеки
  let library = [];
  
  // Добавление книг в библиотеку
  addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
  addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
  addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);
  
  // Поиск книг по автору
  console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));
  
  // Фильтрация книг по жанру
  console.log(filterBooksByGenre("Фэнтези"));
  
  // Генерация отчета по количеству книг каждого жанра
  console.log(genreReport());
  
  // Генерация отчета по среднему количеству страниц
  console.log(`Среднее количество страниц: ${averagePagesReport()}`);
  
  // Удаление книги и вывод об
  removeBook("1984"); console.log(library);