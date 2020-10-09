// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.route('/api')
  .get((req, res) => {
    console.log('GET request detected');
  })
  .post((req, res) => {
    console.log('POST request detected');
    console.log('Form data submitted', req.body);
    res.status(200).send('Hello World');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
function testFunction(){
    fetch('/api')
    .then((response) => response.text())
    .then((response) => {
         console.log(response);
    })
    var el = document.querySelector("Andrew Day's Lab 4")
    el.innerHTML = "Andrew Day's Lab 5";
  }


