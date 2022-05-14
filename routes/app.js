const express = require('express');
const router = express.Router();
const db = require('../conn');

router.get('/:appID', async (req, res) => {
    const appID = req.params.appID;

    const app = await db.get('apps/' + appID);
    if (!app) {
        res.status(404).send('Error 404: Page not found');
        return false;
    }

    res.render('feedback', { appName: 'WhatsOn', appID: appID });

});

module.exports = router;