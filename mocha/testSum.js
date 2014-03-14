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

			num1: '2',
			num2: '4'
		};

		request(url)
			.post('/sum1')
			.send(input)
			.end(function(err, res) {
				if(err) throw err;
				else { 
					expect(res.status).to.eql(200);	
				}
				done();
			});
		});
	});
});
