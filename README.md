Key/Value Benchmarks
--------------------

The project contains a simple benchmark against a collection of modern "noSQL" databases.
The benchmark inserts a number of key/value pairs and times how long it takes.
Currently the following databases are supported:

* Caché
* FoundationDB
* MongoDB
* Redis

We utilize native node.js drivers for each database flavor.

Out of the box, the run-benchmark.sh script will run tests of 100, 1000, 10000,
and 100000 inserts of key/value pairs consisting of random strings - keys are 20
charaters long and the values are 100 (by default)

Caché crushes them all!

Results are stored in [./results.log](./results.log)

Setup
-----
To run this locally, you need to clone this repo. Then install each flavor
of database - take default options for everything.

Each db flavor has a folder with benchmark.js. Command functions shared by all the 
test are stored in [./benchmark.js](./benchmark.js).

You can invoke a test like this:
```
$node benchmark.js <run_size> <key_size> <value_size>
```


