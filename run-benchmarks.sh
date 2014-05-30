#!/bin/bash
rm results.log
echo "Key/Value Benchmark Starting..."
for db in "caché" "fdb" "mongo" "redis"
do 
	echo $db
	cd $db
	echo "running $db"
	rm benchmark.log
	sudo node benchmark.js 100 > benchmark.log
	sudo node benchmark.js 1000 >> benchmark.log
	sudo node benchmark.js 10000 >> benchmark.log
	sudo node benchmark.js 100000 >> benchmark.log
	echo "$db results" >> ../results.log
	echo "-------------" >> ../results.log
	cat benchmark.log >> ../results.log
	echo "" >> ../results.log
	cd ..
done
echo "Done."
cat results.log
