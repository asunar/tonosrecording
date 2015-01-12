
/*
 * GET home page.
 */

exports.index = function(req, res){
	var paymentInfo = {
		title: 'Recording Payment',
		firstName: '',
		lastName: '',
		email: '',
		locations: [ { value: 'West Houston Indoor Soccer', text: 'West Houston Indoor Soccer'  } ],
		selectedLocation: { value: 'west Houston Indoor Soccer'  },
	};

  res.render('index', paymentInfo );
};
