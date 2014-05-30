//var cache_node = require('/Users/jmimick/caches/pluto/bin/cache0100');
var start_time = new Date().getTime();
var run_size = 100;		// default run_size
if ( process.argv[2] ) {
	run_size = process.argv[2];
}
var mongoClient = require('mongodb').MongoClient;
var benchmark = require('../benchmark');
var benchmark = new benchmark.benchmark();
var options = benchmark.parse_args("mongo");

mongoClient.connect( "mongodb://127.0.0.1/benchmark", function(err,db) {

	if ( err ) throw err;
	//var result = cache.kill( benchmark_global );
	var collection = db.collection('benchmark');
	var cc=0;
	collection.drop( function(err,res) {
		if ( err ) throw err;
	collection.ensureIndex("key", function(err,res) {
		for (var i=0; i<options.run_size; i++) {
			var key = benchmark.random_string( options.key_size );
			var value = benchmark.random_string( options.value_size );
			var obj = { "key" : key, "value" : value }
			//console.dir(obj);
			collection.insert( obj, function(err, docs) {
				if ( err ) throw err;
				//console.log("Inserted i="+cc);console.dir(docs);
				cc++;
				if ( cc == options.run_size ) {
					db.close(true,function(err, res) {
						var stop_time = new Date().getTime();
						benchmark.summary(options, (stop_time-start_time) );
			    	});
				}
			});
		}
	});
	});
});


