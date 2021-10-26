/**
 * Validades if a string matches an e-mail pattern
 * @module
 * @param {value} - the string to be matched
 * @returns {bool} - true or false
 */
export default (value) => {
	if (!value) {
		return false;
	}
	const pattern =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return pattern.test(value.trim()) || false;
};
