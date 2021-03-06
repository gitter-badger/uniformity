//noinspection JSUnusedGlobalSymbols
var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	swig = require('swig');
	
module.exports = function() {
    var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	
	app.engine('swig', swig.renderFile);
	
    app.set('views', './app/views');
	app.set('view engine', 'swig');

	// Swig will cache templates for you, but you can disable
	// that and use Express's caching instead, if you like:
	app.set('view cache', false);
	// To disable Swig's cache, do the following:
	swig.setDefaults({ cache: false });
	// NOTE: You should always cache templates in a production environment.
	// Don't leave both of these to `false` in production!
	
	app.use(express.static('./public'));
	
    require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/main.server.routes.js')(app);

    

    return app;
};