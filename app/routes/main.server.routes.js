var routable = require('../controllers/routable.server.controller');
var routing = require('../controllers/route.server.controller');

module.exports = function(app) {
	//noinspection JSUnresolvedFunction
	app.route('/routable')
		.post(routable.create)//works for creating routable in POST
		.delete(routable.remove);//works for deleting routable in DELETE
	app.route('/list/:obj').get(routable.list);//works for listings obj in public
	app.route('*')
		.all(routing.routeByURL)//gets a route by friendly url
		.all(routing.routeByID);//gets a route by hid

	app.use(routing.error404);

	
	/*app.get('*', function(req, res, next){ 
	  if(req.headers.host == 'some.sub.domain.com')  //if it's a sub-domain
		req.url = '/mysubdomain' + req.url;  //append some text yourself
	  next(); 
	//This will mean that all get requests that come from the subdomain will get 
	//	/subomdin appended to them
	}); */
	
};