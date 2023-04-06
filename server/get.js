const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// Define the route handler function
const getAllTweets = async (req, res) => {
  try {
    const tweetsCollectionRef = admin.firestore().collection('tweets');
    const data = await tweetsCollectionRef.get();
    const filteredData = data.docs.map((doc) => ({
      ...doc.data()
    }));
    res.json(filteredData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Define the router
router.get('/getAllTweets', getAllTweets);

// Export the router
module.exports = router;
