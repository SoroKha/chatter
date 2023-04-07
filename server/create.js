const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const createTweet = async (req, res) => {
    try {
        const { id, text, media, userId, date } = req.body; 
        const tweetsCollectionRef = admin.firestore().collection('tweets');
        const newTweetRef = tweetsCollectionRef.doc(); 
        const newTweetData = {
            id: id,
            userId: userId,
            text: text,
            media: media,
            date: date,
            views: 50
        }; 
        await newTweetRef.set(newTweetData); 
        res.json({ ...newTweetData }); 
    }
     catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
  
router.post('/createTweet', createTweet);

module.exports = router;
