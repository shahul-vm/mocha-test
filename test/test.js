const assert = require('assert');
const request = require('request');

describe('Main page', function(){
    it('Main page content should print \'Hello World\'', function(done) {
        request('http://localhost:8083' , function(error, response, body) {
            assert.equal(body, 'Hello World');
            done();
        });
    });
    it('Main page response should be 200', function(done) {
        request('http://localhost:8083' , function(error, response, body) {
            assert.equal(response.statusCode, 200);
            done();
        });
    });
});

describe('About page', function(){
    it('About page should return 404', function(done) {
        request('http://localhost:8083/about' , function(error, response, body) {
            assert.equal(response.statusCode, 404);
            done();
        });
    });
});