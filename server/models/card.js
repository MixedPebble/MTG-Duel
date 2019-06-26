import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Card = new Schema({
    name: {
    type: String
    },
    manaCost: {
    type: String
    },
    cmc: {
    type: Number
    },
    colors: {
    type: [String]
    },
    colorIdentity: {
    type: [String]
    },
    type: {
    type: String
    },
    supertypes: {
    type: [String]
    },
    types: {
    type: [String]
    },
    subtypes: {
    type: [String]
    },
    rarity: {
    type: String
    },
    set: {
    type: String
    },
    setName: {
    type: String
    },
    text: {
    type: String
    },
    artist: {
    type: String
    },
    number: {
    type: String
    },
    layout: {
    type: String
    },
    multiverseid: {
    type: String
    },
    imageUrl: {
    type: String
    },
    // rulings: {
    // type: [String]
    // },
    // foreignNames: {
    // type: String
    // },
    printings: {
    type: [String]
    },
    originalText: {
    type: String
    },
    originalType: {
    type: String
    },
    // legalities: {
    // type: String
    // },
    flavor: {
    type: String
    },
    power: {
    type: String
    },
    toughness: {
    type: String
    },
    id: {
    type: String
    }
});

export default mongoose.model('Card', Card);
