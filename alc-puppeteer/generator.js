function* idMaker() {
	var index = 0;
	while (true) {
		yield index++;
	}
}

var g = idMaker();

module.exports = idMaker;
