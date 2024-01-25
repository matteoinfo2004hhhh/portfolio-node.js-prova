const express = require('express');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
let MatteoBarcellonaLibrary = require('./functions.js');
let data = require('./data/person.json');
let app = express(); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/immagini', express.static(path.join(__dirname, 'immagini')));
app.use('/expl', express.static(path.join(__dirname, 'expl')));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.get('/hh', function (req, res) {
  res.render('htmle');
});
app.get('/hh2', function (req, res) {
  res.render('csse');
});
app.get('/hh3', function (req, res) {
  res.render('javae');
});
app.get('/hh4', function (req, res) {
  res.render('c++e');
});
app.get('/hh5', function (req, res) {
  res.render('jse');
});
app.get('/hh6', function (req, res) {
  res.render('pye');
});
app.get('/hh7', function (req, res) {
  res.render('phpe');
});
app.get('/hh8', function (req, res) {
  res.render('nodejse');
});
app.get('/hh9', function (req, res) {
  res.render('jj');
});
app.get('/hh10', function (req, res) {
  res.render('webse');
});
app.get('/hh11', function (req, res) {
  res.render('c#e');
});
app.get('/hh12', function (req, res) {
  res.render('tse');
});
app.get('/hh13', function (req, res) {
  res.render('an');
});
app.get('/hh14', function (req, res) {
  res.render('reac');
});
app.get('/hh15', function (req, res) {
  res.render('sql');
});
app.get('/p1', function (req, res) {
  res.render('certificati');
});
app.get('/p2', function (req, res) {
  res.render('videogame');
});
app.get('/p3', function (req, res) {
  res.render('sd');
});
app.get('/p4', function (req, res) {
  res.render('sd');
});
app.get('/p5', function (req, res) {
  res.render('wde');
});
app.get('/p6', function (req, res) {
  res.render('bs5');
});
app.get('/p7', function (req, res) {
  res.render('si');
});
app.get('/p8', function (req, res) {
  res.render('wbs');
});
app.get('/p9', function (req, res) {
  res.render('app');
});
app.get('/p10', function (req, res) {
  res.render('datab');
});

app.get('/postit', (req, res) => {
  var data1;
  data1 = fs.readFileSync('./data/person.json', 'utf8', (err, dati) => {
    if (err) {
      console.error(err);
      return;
    } else {
      return dati;
    }
  });
  res.render('postit', { data: JSON.parse(data1) });

});

app.get('/json', function (req, res) {
  res.sendFile(__dirname + '/data/person.json');
});

app.post('/scrivi', function (req, res) {
  let size = Object.keys(data).length;
  let datoJSON = JSON.parse(
    fs.readFileSync('./data/person.json', 'utf8', function (err) {
      if (err) {
        console.log('');
      }
    })
  );

  let person = {
    Nome: req.body.Nome,
    Cognome: req.body.Cognome,
    Num:req.body.Num,
    Gmail:req.body.Gmail,
    Domanda:req.body.Domanda
  };
  datoJSON.push(person);
  console.log(datoJSON);

  fs.writeFile('./data/person.json', JSON.stringify(datoJSON), (err) => {
    if (err) {
      throw err;
    }
    console.log('i dati li ho scritti nel file person.json');
  });
  res.redirect('/');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

