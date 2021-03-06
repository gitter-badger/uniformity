var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var RouteSchema = new Schema({
	hid: { type : Number, required : true, unique : false },
	url: String,
	type: String,
	object: { type : Schema.ObjectId }
},
{
	collection: 'routes'
}
);

mongoose.model('Route', RouteSchema);