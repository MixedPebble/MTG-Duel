import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import cards from './routes/cards';
import decks from './routes/decks';
import register from './routes/register';
import login from './routes/login';
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/cards', {
  useNewUrlParser: true
});
const port = 4000;
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established');
}).catch(err => {
  console.log('Error connecting to MongoDB');
});




// app.use('/api', api);
app.use('/cards', cards);
app.use('/decks', decks);
app.use('/register', register);
app.use('/login', login);
app.use('/', router);
app.listen(port, () => console.log('Express server running on port:' + port));








/*


app/ contains content of the app
public/ contains views and public resources

app/
  server.js contains express server config, database initialization, server settings
  routes.js
  database.js
  controllers/ contains server-side logic for each route
*/
/*
router.route('/issues/:id').get((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (err) {
      console.log(err);
    } else {
      res.json(issue);
    }
  });
});
*/

// Post request to create new issue. Returns the issue w/ a message saying success
/*
router.route('/issues/add').post((req, res) => {});
*/
// Get request to get all issues
/*
router.route('/issues').get((req, res) => {

  let issue = new Issue({
    title: 'test'
  });
  issue.save().then(iss => {
    console.log('saved');
  });

  Issue.find((err, issues) => {
    if (err) {
      console.log(err);
    } else {
      res.json(issues);
    }
  });
});
*/

// the : signifies that it's some unused url var to get a particular collection doc
// Gets request to get issues by ID



// Post request to update an existing issue by id
/*
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
*/
// Delete request to delete an existing issue by id
/*
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
*/
