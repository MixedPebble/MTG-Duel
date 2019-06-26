import express from 'express';
import Card from '../models/card';
import Deck from '../models/deck';
const router = express.Router();


router.route('/').get((req, res) => {

  let deckSchema = createDeck();
  console.log('deckSchema');
  console.log(deckSchema);
  deckSchema.save().then(schema => {
    console.log('it was saved?');
  }).catch(err => console.log(err));
});

function createDeck() {
  console.log('called');
   Card.find({'name' : 'Air Elemental'}, (err, cards) => {
    let test = {
      name: 'hello world',
      uid: '1234567890',
      // cards: []
    }

    });
    let deckSchema = new Deck(null);
    return deckSchema;
}


module.exports = router;
