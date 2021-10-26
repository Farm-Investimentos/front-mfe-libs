/**
 * Create state object for basic values,
 * with keys based on a list of keys
 * and the default value null or array
 * @module
 * @param {keys} - list of state's keys
 * @returns {basicKeysState} - object with key/value pairs
 */
export default (keys) => {
	const basicKeysState = {};
	keys.forEach(
		(key) => (basicKeysState[key] = key.endsWith('List') ? [] : null),
	);
	return basicKeysState;
};