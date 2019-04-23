/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  
    "files": ['src/css/*.css','src/js/*.js','src/**/*.php'],
   
    "watch": true,
    "browser": "firefox",
   
    "proxy": "localhost:81",
    "port": 3000,
    "ghostMode": {
        "clicks": true,
        "scroll": true,
        "location": true,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
   
    "reloadOnRestart": false,
    "reloadDelay": 0,
    "injectNotification": true
};
