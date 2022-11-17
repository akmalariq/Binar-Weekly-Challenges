const express = require('express')
const app = express()
const port = 2000

app.use(express.json())

class Book {
  static records = [];
  
  constructor(params) {
    this.id = this._generateId()
    this.title = params.title;
    this.coverImage = params.coverImage;
    this.synopsis = params.synopsis;
    this.publisher = params.publisher;
    this.author = params.author;
    this.price = params.price;
  }

  _generateId() {
    const lastRecordId = this.constructor.records[this.constructor.records - 1]?.id || 0
    return lastRecordId + 1;
  }
  
  update(params) {
    const idx = this.constructor.records.findIndex((i) => i.id === this.id);

    params.title && (this.title = params.title);
    params.coverImage && (this.coverImage = params.coverImage);
    params.synopsis && (this.synopsis = params.synopsis);
    params.publisher && (this.publisher = params.publisher);
    params.author && (this.author = params.author);
    params.price && (this.price = params.price);
    
    this.constructor.records[idx] = this;
    
    return this;
  }
  
  delete() {
    this.constructor.records = this.constructor.records.filter((i) => i.id !== this.id);
  }

  static create(params) {
    const book = new this(params);

    this.records.push(book);

    return book;
  }

  static find(id) {
    const book = this.records.find((i) => i.id === Number(id));
    if (!book) return null;

    return book;
  }

  static list() {
    return this.records
  }
}

// GET /books (list books)
app.get("/books", (req, res) => {
    const books = Book.list()
    res.status(200).json(books)
})

// GET /books/{id} (get book)
app.get("/books/:id", (req, res) => {
    const book = Book.find(req.params.id)
    if (!book) res.status(404).json({
        error: "Book not found!"
    })

    res.status(200).json(book)
})

// POST /books (create book)
app.post("/books", (req, res) => {
    const book = Book.create(req.body)
    res.status(201).json(book)
})

// PUT /books{id} (update book)
app.put("/books/:id", (req, res) => {
    const book = Book.find(req.params.id)
    if (!book) return res.status(404).json({
        error: "Book not found!"
    })

    book.update(req.body)

    res.status(200).json(book)
})

// DELETE /books{id} (delete book)
app.delete("/books/:id", (req, res) => {
    const book = Book.find(req.params.id)
    if (!book) return res.status(404).json({
        error: "Book not found!"
    })

    book.delete()

    res.status(204).json(book)
})



app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})