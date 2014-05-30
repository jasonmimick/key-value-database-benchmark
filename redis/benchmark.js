//var cache_node = require('/Users/jmimick/caches/pluto/bin/cache0100');
var start_time = new Date().getTime();
var redis = require('redis');
var benchmark = require('../benchmark');
var client= new redis.createClient();
var benchmark = new benchmark.benchmark();
var options = benchmark.parse_args('redis');

for (var i=0; i<options.run_size; i++) {
	var key = benchmark.random_string( options.key_size );
	var value = benchmark.random_string( options.value_size );
	client.set(key,value);

}
client.quit();
var stop_time = new Date().getTime();
benchmark.summary(options, (stop_time-start_time));


