const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const customers = [
    {
      "dni": "2314654",
      "name": "Alberto Martinez",
      "age": 32
    },
    {
      "dni": "9874654",
      "name": "Tania Gonzalez",
      "age": 30
    },
    {
      "dni": "23157481",
      "name": "Esmeralda Martinez",
      "age": 0
    }
  ];
  res.status(200).json({ customers });
})

router.put('/:dni', (req, res, next) => {
  res.status(201).json({ success: true })
})

router.post('/', (req, res, next) => {
  const newUser = req.body;
  res.status(200).json([newUser])
})

router.delete('/:dni', (req, res, next) => {
  res.status(204).json({ success: true })
})

module.exports = router;
