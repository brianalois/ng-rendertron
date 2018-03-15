require('dotenv').config();//instatiate environment variables

CONFIG = {} //Make this global to use all over the application

CONFIG.port             = process.env.PORT     || '8080';
CONFIG.app_url          = process.env.APP_URL     || 'localhost:8080';
CONFIG.render_url       = process.env.RENDER_URL  || 'https://render-tron.appspot.com/render';

CONFIG.app_path       = process.env.APP_PATH  || 'localhost:8081';

