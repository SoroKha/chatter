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

const createUser = async (req, res) => {
    try {
        const { id, created, birthday, level, location, name, profilePicture, settings, tag } = req.body; 
        const userCollectionRef = admin.firestore().collection('users');
        const userRef = userCollectionRef.doc(); 
        const accountData = {
            id: id,
            created: created,
            birthday: birthday,
            level: level,
            location: location,
            name: name,
            profilePicture: profilePicture,
            settings: settings,
            tag: tag,
        };
        await userRef.set(accountData); 
        res.json({ ...accountData }); 
    }
     catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
  
const createRouter = express.Router();
createRouter.post('/createTweet', createTweet);
createRouter.post('/createUser', createUser);

module.exports = createRouter;
