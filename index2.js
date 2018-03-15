require('./config/env')
const express       = require('express');
const rendertron    = require('rendertron-middleware');
const path          = require('path');
const app           = express();

app.use(rendertron.makeMiddleware({
    proxyUrl: CONFIG.render_url,
}));

let app_path = path.join(__dirname, CONFIG.app_path);
console.log('app path: ', app_path);


app.get('*', express.static(app_path));

app.listen(CONFIG.port);