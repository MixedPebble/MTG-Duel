import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Issue from './models/issue';
import Card from './models/card';
import mtg from 'mtgsdk';
const app = express();
const router = express.Router();

/*
listens on port 4000
Establishes connection with MongoDB
*/

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/cards');

const connection = mongoose.connection;


//Event listener. Fires 'once'. Listens for the 'open' event. Attches event handler function with fat arrow syntax
connection.once('open', () => {
  console.log('MongoDB connection established');
});


router.route('/cards/add').get((req, res) => {
  mtg.card.all().on('data', card => {
    let cardSchema = createCard(card);
    cardSchema.save().then(schema => {
      console.log('save success');
    }).catch(err => {
      console.log(err);
    });
  });
});

function createCard(card) {
    //TODO: rulings, foreignNames and legalities needs to be added in a custom way.

  let cardSchema = new Card(card);
  return cardSchema;
}

// Post request to create new issue. Returns the issue w/ a message saying success
router.route('/issues/add').post((req, res) => {
});

// Get request to get all issues
router.route('/issues').get((req, res) => {

  let issue = new Issue({title: 'test'});
  issue.save().then(issue => {
    console.log('saved');

  })

  Issue.find((err, issues) => {
    if (err) {
      console.log(err);
    } else {
      res.json(issues);
    }
  });
});
// the : signifies that it's some unused url var to get a particular collection doc
// Gets request to get issues by ID
router.route('/issues/:id').get((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (err) {
      console.log(err);
    } else {
      res.json(issue);
    }
  });
});


// Post request to update an existing issue by id
router.route('/issues/update/:id').post((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (!issue) {
      return next(new Error('could not load document'));
    } else {
      issue.title = req.body.title;
      issue.responsible = req.body.responsible;
      issue.description = req.body.description;
      issue.severity = req.body.severity;
      issue.status = req.body.status;
      issue.save().then(issue => {
        res.json('update done');

      }).catch(err => {
        res.status(400).send('update failed');
      });
    }
  })
});

// Delete request to delete an existing issue by id
router.route('/issues/delete/:id').get((req, res) => {
  Issue.findByIdAndRemove({
    _id: req.params.id
  }, (err, issue) => {
    if (err) {
      res.json(err);
    } else {
      res.json('Remove success');
    }
  })
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));






/*
Create endpoints that angular can acces using http requests
HTTP GET request to retrieve the list of issues from MongoDB
HTTP GET request to retrieve a single issue by its ID
HTTP POST request to insert or update an issue record
HTTP delete request to remove an issue by its ID from the database
*/