/*
benchmark.js

node module which defines common functions
to generate data for benchmarks.

*/
var DEFAULT_RUN_SIZE = 25;

var benchmark = function(run_size) {
	var self = this;
	if ( run_size == undefined ) {
		run_size = DEFAULT_RUN_SIZE;
	}
	self.run_size = run_size;
}
benchmark.prototype.summary = function(options, run_time_milliseconds) {
	options.run_time_milliseconds = run_time_milliseconds;
	console.dir( options );
}
benchmark.prototype.parse_args = function(flavor) {
	var options = {
		run_size : 100,
		key_size : 20,
		value_size : 100,
		flavor : flavor
	}
	if ( process.argv[2] ) {
		options.run_size = process.argv[2];
	}
	if ( process.argv[3] ) {
		options.key_size = process.argv[3];
	}
	if ( process.argv[4] ) {
		options.value_size = process.argv[4];
	}
	if ( isNaN(options.run_size) || isNaN(options.key_size) || isNaN(options.value_size) ) {
		throw "Invalid argument - check options: " + process.args.join();
	}
	return options;
}
benchmark.prototype.random_int = function(min,max) {
	var self = this;
	return Math.floor(Math.random()*(max-min+1)+min);
}
benchmark.prototype.random_char = function() {
	var self = this;
	return String.fromCharCode( self.random_int(48,122) );
}
benchmark.prototype.random_string = function(size) {
	var self = this;
	var s = "";
	for (var i=0; i<size; i++) {
		s += self.random_char();
	}
	return s;
}

exports.benchmark = benchmark;

