import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('From API route');
});

module.exports = router;
