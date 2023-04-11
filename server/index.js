const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const getAllTweets = require('./get');
const createRouter = require('./create');

const PORT = process.env.PORT || 3001;
const HOST = '192.168.0.247';

const app = express();
app.use(cors());
app.use(express.json());

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const router = express.Router();
router.use(getAllTweets); 
router.use(createRouter);
app.use('/', router); 

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
