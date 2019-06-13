import mongoose from 'mongoose';
import Card from './card';

const Schema = mongoose.Schema;

let Deck = new Schema({
  name: {
    type: String
  },
  uid: {
    type: String
  },
  cards: {
    type: [Card.Schema]
  }
});

export default mongoose.model('Deck', Deck);
