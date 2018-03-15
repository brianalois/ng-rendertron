const url = require('url');

const generateUrl(req){
    let botUrl = url.format({
        protocal:req.protocol,
        host: CONFIG.app_url,
        pathname: req.originalUrl,

    })

    return `${CONFIG.render_url}/render/${botUrl}`;
}
module.exports.generateUrl = generateUrl;

const detectBot(userAgent){
    const bots = [
        //crawler bots
        'googlebot',
        'bingbot',
        'yandexbot',
        'duckduckbot',
        'slurp',

        //link bots
        'twitterbot',
        'facebookexternalhit',
        'linkedinbot',
        'embedly',
        'baiduspider',
        'pinterest',
        'slackbot',
        'vkShare',
        'facebot',
        'outbrain',
        'W3C_Validator',
    ]

    const agent = userAgent.toLowerCase();
    for( const bot of bots){
        if(agent.indexOf(bot) > -1){
            console.log('bot detected', agent);
            return true;
        }
    }

    console.log('no bot found');
    return false;
}
module.exports.detectBot = detectBot;