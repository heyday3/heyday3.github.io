// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.route('/api')
  .get((req, res) => {
    console.log('GET request detected');
<<<<<<< HEAD

    router.get('/', function (req, res) {
      res.send('hello world')
    })
=======
    res.send(`Lab 5 for ${process.env.NAME}`);
>>>>>>> 909375a2b0b535df0f171bc967ba90cb521f7ffb
  })
  .post((req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


