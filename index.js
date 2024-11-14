const  bookData = require("./booksData");
const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());
//5
app.get ('/api/books',(req,res)=>{

    res.json(bookData);
});
//4
app.get ('/api/books/available',(req,res)=>{
    const available = bookData.filter(bookData=>bookData.available)
    res.json(available);
});
//3
app.get ('/api/books/genre/:genre',(req,res)=>{
    const genre = req.params.genre;
    const genreBook = bookData.filter(bookData=>bookData.genre.toLowerCase() === genre.toLowerCase())
    res.json(genreBook);
});
//2
app.get ('/api/books/author/:author',(req,res)=>{
    const author = res.params.author;
    const authorBook = bookData.filter(bookData=>bookData.author.toLowerCase()===author.toLowerCase())
    res.json(authorBook);
});
//1
app.get ('/api/books/year/before/:year ',(req,res)=>{
    const year = res.params.year;
    const yearBook = bookData.filter(bookData=>bookData.year === year);
    res.json(yearBook);
});

app.listen(port,()=>{
    console.log("Server is listning at port number:",port);
})