import express from 'express';

import db from './conn.js';  

const app = express();

app.get('/', (req, res) => {
   res.send("Hello dev");
  // res.write("Hello Jun");
  // res.write("Hello Sinior");
  res.end()
});

app.listen(3000, () => {
  console.log("My server is running on http://localhost:3000");
});
