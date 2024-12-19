const express = require('express');
const path = require('path')
const mysql = require('mysql2')
const router2 = express.Router();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sprawdzian_node_v4'
})

router2.use('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = 'SELECT * FROM student WHERE id = \'' + id + '\''
  conn.query(query, (err, rows) => {
    if (err) {
      console.error(err);
    }
    res.json(rows);
  })
})

router2.use('/', (req, res) => {
  conn.query('SELECT * FROM student', function (err, rows) {
    if (err) {
      console.error('Błąd wykonania zapytania:', err.message);
      res.status(500).json({ error: 'Błąd serwera' });
    }
    res.json(rows);
  })
})

router2.get('/', (req, res) => {
  const { firstname, lastname, email } = req.query;
  const query = 'SELECT * FROM student WHERE firstName = \'' + firstname + '\' AND lastName = \'' + lastname + '\' AND email = \'' + email + '\'';
  conn.query(query, (err, rows) => {
    if (err) {
      console.error(err);
    }
    res.json(rows);
  })

})

module.exports = router2;
