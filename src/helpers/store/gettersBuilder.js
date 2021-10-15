/**
 * Create a list of getters (functions) based on a list os state keys
 * @param {attributes} - the state keys
 * @returns {getters} - array of functions
 */
export default (attributes) => {
	const getters = {};
	attributes.forEach((attr) => {
		getters[attr] = (state) => state[attr];
	});
	return getters;
};
