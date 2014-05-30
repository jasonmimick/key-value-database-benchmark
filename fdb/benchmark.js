var start_time = new Date().getTime();
var fdb = require('fdb').apiVersion(200);
var benchmark = require('../benchmark');

var db = fdb.open();
var benchmark = new benchmark.benchmark();
var options = benchmark.parse_args('fdb');
db.clearRange('', '\xff');
for (var i=0; i<options.run_size; i++) {
	var key = benchmark.random_string( options.key_size );
	var value = benchmark.random_string( options.value_size );
	db.set(key,value);

}
var stop_time = new Date().getTime();
benchmark.summary(options, (stop_time-start_time));


