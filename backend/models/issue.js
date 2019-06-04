import mongoose from 'mongoose';

// define the model/schema. Then export it to be used everywhere.


const Schema = mongoose.Schema;

let Issue = new Schema({
  title: {
    type: String
  },
  responsible: {
    type: String
  },
  description: {
    type: String
  },
  severity: {
    type: String
  },
  status: {
    type: String,
    default: 'Open'
  }
});

export default mongoose.model('Issue', Issue);


/*

{ name: 'Diabolic Tutor',
  manaCost: '{2}{B}{B}',
  cmc: 4,
  colors: [ 'Black' ],
  colorIdentity: [ 'B' ],
  type: 'Sorcery',
  supertypes: [],
  types: [ 'Sorcery' ],
  subtypes: [],
  rarity: 'Uncommon',
  set: '10E',
  setName: 'Tenth Edition',
  text: 'Search your library for a card and put that card into your hand. Then shuffle your library.',
  flavor: 'The best ideas often come from the worst minds.',
  artist: 'Greg Staples',
  number: '135',
  layout: 'normal',
  multiverseid: 129525,
  imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129525&type=card',
  rulings: [],
  printings:
   [ '10E',
     '8ED',
     '9ED',
     'CMA',
     'CMD',
     'CN2',
     'KLD',
     'M10',
     'M11',
     'M12',
     'M14',
     'ODY',
     'PHUK',
     'PSAL' ],
  originalText: 'Search your library for a card and put that card into your hand. Then shuffle your library.',
  originalType: 'Sorcery',
  legalities:
   [ { format: 'Commander', legality: 'Legal' },
     { format: 'Duel', legality: 'Legal' },
     { format: 'Frontier', legality: 'Legal' },
     { format: 'Legacy', legality: 'Legal' },
     { format: 'Modern', legality: 'Legal' },
     { format: 'Penny', legality: 'Legal' },
     { format: 'Vintage', legality: 'Legal' } ],
  id: '5e472972-de49-5bf8-b39c-edfdf7851976' }

*/
