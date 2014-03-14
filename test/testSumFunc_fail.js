var sum = require('../routes/sum');
var inputs = require('../config.json').input;
var _ = require('underscore');

/**
Test to check if sum returned is correct
Using nodeunit module
*/


exports['sum'] = function(test) {

	//console.log(input);
	_.each(inputs, function(input) {
		test.equal(sum.sum(input.text1, input.text2), (input.text1 + input.text2 - 1)) ;
	});
	test.done();
}
