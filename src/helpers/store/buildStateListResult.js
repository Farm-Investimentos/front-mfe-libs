/**
 * Create state object for a paginated item and basic values,
 * based on a list of state's keys
 * @module
 * @param {keys} - list of state's keys
 * @returns {basicKeysState} - object with key/value pairs
 */
export default (keys) => {
	const keysState = {};
	keys.forEach(
		(key) =>
			(keysState[key] = {
				results: [],
				totalPages: null,
				total: null,
			}),
	);
	return keysState;
};
