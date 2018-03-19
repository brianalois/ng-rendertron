require('./config/env')
const functions = require('firebase-functions');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const util = require('./helpers/util');

const appUrl = CONFIG.app_url;


app.get('*', async (req, res) => {

    const isBot = detectBot(req.headers['user-agent']);

    if(isBot){
        const botUrl = util.generateUrl(req);
        let renderRes = await fetch(botUrl);

        let body = await renderRes.text();

        res.set('Cache-Control', 'public, max-age-300, s+maxage-600');
        res.set('Vary', 'User-Agent');

        return res.send(body.toString());
    }

    let data = fetch(`https://${appUrl}`)
})

export.app = functions.https.onRequest(app);
//https://www.youtube.com/watch?v=ANyOZIcGvB8