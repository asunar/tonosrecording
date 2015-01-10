
/*
 * GET home page.
 */

exports.index = function(req, res){
	var paymentInfo = {
		title: 'Recording Payment',
		firstName: 'Test',
		lastName: 'Tester',
		email: 'test@test.com',
		locations: [ { value: 'West Houston Indoor Soccer', text: 'West Houston Indoor Soccer'  } ],
		selectedLocation: { value: 'west Houston Indoor Soccer'  },
		messages: [{ type: "Warning", text: "A warning message" }]
	};

  res.render('index', paymentInfo );
};
