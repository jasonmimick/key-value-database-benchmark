import os,binascii

for x in range(0, 100):
	key = binascii.b2a_hex( os.urandom(15) )
	value = binascii.b2a_hex( os.urandom(1000) )
	print "x=",x
	print "key=",key
	print "value=",value

