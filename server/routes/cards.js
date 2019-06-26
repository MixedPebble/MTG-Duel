import express from 'express';
import Card from '../models/card';
import mtg from 'mtgsdk';
import verifyToken from '../middleware/token-verification'

const router = express.Router();

router.route('/add').get((req, res) => {
  mtg.card.all().on('data', card => {
    let cardSchema = createCard(card);
    cardSchema.save().then(schema => {
      console.log('Card: ' + card.title + ' saved successfully');
    }).catch(err =>console.log(err));
  });
});

router.route('/').get((req, res) => {
  Card.find((err, cards) => {
    if (err) {
      console.log('JEE WIZ BATMAN! ' + err);
    } else {
      res.json(cards);
    }
  });
});

router.get('/:cardName',verifyToken.verifyToken,(req, res) => {
  console.log('getting cards with name');
  var query = { name: req.params.value};
  Card.find({'name' : req.params.cardName}, (err, cards) => {
    res.json(cards);
  });
});


function createCard(card) {
  //TODO: rulings, foreignNames and legalities needs to be added in a custom way.
  let cardSchema = new Card(card);
  return cardSchema;
}

module.exports = router;
