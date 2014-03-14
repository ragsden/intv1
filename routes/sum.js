
/*
 * POST sum of numbers
 */

exports.sum = function sum(a, b) {

	return (parseInt(a)+parseInt(b)).toString();
/*	return function(req, res) {
		var num1 = req.body.text1;
		var num2 = req.body.text2;
		res.send("Sum: " + (parseInt(num1) + parseInt(num2)).toString());
	};
*/
};
