const express = require('express');
const router = express.Router();
const db = require('../conn');

router.post('/submit', async (req, res) => {

    if (!req.body) {
        res.status(400).json({ error: 'No body' });
        return false;
    }

    const { title, description, appID } = req.body;
    console.log(appID, title, description);
    const app = await db.get('apps/' + appID);
    if (!app) {
        res.status(404).json({ error: "App doesn't exist" });
        return false;
    }
    const data = { title, description, timestamp: Date.now() };
    const { path, id } = await db.push(`feedback/${appID}`);
    const result = await db.set(path, data);
    
    if (result) {
        res.status(201).json({ result, message: 'Feedback sent' });
    }

});

module.exports = router;