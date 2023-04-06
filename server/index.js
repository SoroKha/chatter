const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const router = require('./get');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use('/tweets', router); // use the router object directly

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
