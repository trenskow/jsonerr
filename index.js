'use strict';

module.exports = exports = (err, options) => {

	let obj = {
		name: err.name,
		message: err.message
	};

	if ((options || {}).stack !== false) {
		obj.stack = err.stack
			.split('\n')
			.map(line => line.trim())
			.slice(1)
			.map((line) => {
				return /^at ((.*?)(?: \[as (.*?)\])? \((.*?):([0-9]+):([0-9]+)\)|(.*?):([0-9]+):([0-9]+))$/.exec(line);
			})
			.filter(line => line)
			.map((line) => {
				return {
					function: line[3] || line[2] || line[7],
					file: line[4],
					line: parseInt(line[5] || line[8]),
					pos: parseInt(line[6] || line[9])
				};
			});
	}

	if ((options || {}).enumerables === true) {
		options.enumerables = Object.keys(err).filter((key) => {
			return err.hasOwnProperty(key);
		});
	}

	if (Array.isArray((options || {}).enumerables)) {
		options.enumerables.forEach((key) => {
			obj[key] = err[key];
		});
	}

	return obj;

};
