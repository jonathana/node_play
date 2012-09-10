//var sys = require("sys");
var stat = require("posix").stat,
	puts = require("sys").puts;

var fileName = process.ARGV[2];
puts("Checking mtime of " + fileName);

var promise = stat(fileName);

promise.addCallback(function(a) {
	puts("modified: " + a.mtime);
});

