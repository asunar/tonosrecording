
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
require('express-helpers')(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/charge', function (req, res) {
	console.log('Posted');
	console.log(req.body);	
	chargeCard(req.body.stripeToken);
});


function chargeCard(stripeToken){
	var stripe = require("stripe")("sk_test_BQokikJOvBiI2HlWgH4olfQ2");

	var charge = stripe.charges.create({
		amount: 3000, // amount in cents, again
		currency: "usd",
		card: stripeToken,
		description: "payinguser@example.com"
	}, function(err, charge) {
		if (err && err.type === 'StripeCardError') {
			// The card has been declined
		}
		else {
			console.log(charge);
		}
	});	
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
