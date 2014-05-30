//var cache_node = require('/Users/jmimick/caches/pluto/bin/cache0100');
var start_time = new Date().getTime();
var cache_node = require('./cache');
var benchmark = require('../benchmark');
var connection = { path : '/Users/jmimick/caches/pluto/mgr',
				   username : '_system',
				   password : "SYS",
				   namespace : "USER" };

var cache = new cache_node.Cache();
var benchmark = new benchmark.benchmark();
var options = benchmark.parse_args('caché');

cache.open( connection, function(err,res) {

	//console.dir(err);
	//console.dir(res);
	//console.dir( cache.version() );
	var benchmark_global = { global : "benchmark" };
	var result = cache.kill( benchmark_global );
	for (var i=0; i<options.run_size; i++) {
		var key = benchmark.random_string( options.key_size );
		var value = benchmark.random_string( options.value_size );
		benchmark_global.subscripts = [ key ];
		benchmark_global.data = value;
		//console.dir(benchmark_global);
		var result = cache.set( benchmark_global );
		//console.dir(result);


	}
	cache.close();
	var stop_time = new Date().getTime();
	benchmark.summary(options, (stop_time-start_time));
});


