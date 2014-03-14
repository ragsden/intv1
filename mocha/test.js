var should = require('should');
var assert = require('assert');
var request = require('supertest');
var expect = require('expect.js');

describe('Routing', function() {

	var url = "http://localhost:8000";
	before(function(done) {

		done();
	});

	describe('Addends', function() {
		it('should return sum of the two numbers passed', function(done) {
		var input = {

			'text1': 2,
			'text2': 4
		};

		console.log(input);

		request(url)
			.post('/sum')
			.send(input)
			.end(function(err, res) {
				if(err) throw err;
				else {
					var sum = res.body.sum;
					var expectedSum = 6;
					expect(sum).to.eql(expectedSum);
					expect(res.status).to.eql(200);
				}
				done();
			});
		});
	});
});
