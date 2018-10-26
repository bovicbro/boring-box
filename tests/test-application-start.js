var expect = require('chai').expect;
var request = require('request');

//Testing the application runs on the coorect port
it('Application runs on port 3000', function(done){
    request('http://localhost:3000', function (error, response) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
