import express from 'express';

const app = express();


app.use(express.json());

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: '1984', author: 'George Orwell' },
];


app.get("/", (req:any, res:any) => {
    res.json({"message": "Hello Siam from Express server!"})
})

app.get('/api/books', (req:any, res: any) => {
  res.json(books);
});


export default app;