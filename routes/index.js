
/*
 * GET home page.
 */

exports.index = function(req, res){
	var paymentInfo = {
		title: 'Recording Payment',
		firstName: 'Test',
		lastName: 'Tester',
		email: 'test@test.com',
		eventDate_Month: 1,
		eventDate_Day: 1,
		eventDate_Year: 2015,
		eventDate_Hour: 6,
		eventDate_Minute: 0,
		eventDate_AMPM: [ {value: 'AM', text: 'AM'}, { value: 'PM', text: 'PM'  }],
		eventDate_AMPM_selected:  {"value": 'PM'},
		locations: [ { value: 'West Houston Indoor Soccer', text: 'West Houston Indoor Soccer'  } ],
		selectedLocation: { value: 'west Houston Indoor Soccer'  }

	};

  res.render('index', paymentInfo );
};
