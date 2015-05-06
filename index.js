var resolve = require('path').resolve;
var file = resolve(__dirname, 'assets/css', 'style.css');

module.exports = function dmpStyleBasic ($, document, done) {
	var $container = $('head');

	if ( ! $container.length) {
		$container = $.root();
	}

	$container.prepend('<link rel="stylesheet" type="text/css" href="file://' + file + '"/>');

	done();
};
