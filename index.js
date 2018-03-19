'use strict'
require('./config/env')

const express         = require('express');
const app             = express();
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override'); // simulate DELETE and PUT (express4)
const router          = express.Router();
const rendertron      = require('rendertron-middleware');

const dir             = __dirname + CONFIG.app_path;

console.log('——————————- Run on port '+ CONFIG.port);
console.log('——————————- Serving directory: ' + dir)

app.use(rendertron.makeMiddleware({
    proxyUrl: CONFIG.render_url,
}));

/****************************** Router ***************************/
router.get('*', function(req, res){
    res.sendFile('index.html', { root: dir });
});

/****************************** /Router ***************************/

// app.use(morgan('dev')); // log every request to the console
app.use(express.static(dir)); // Static (public) folder

app.use(bodyParser.urlencoded({extended:true}));// get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/', router); // app.use('/parent', router); call all from localhost:port/parent/*

app.listen(CONFIG.port);