/**
 * Created by rohitghatol on 1/28/15.
 */
var db = require('./config/db')();

var app = require('./config/express')(db);

//Configure express routes
require('./config/routes.js')(app);


app.listen('3000');
console.log('listening on port 3000');