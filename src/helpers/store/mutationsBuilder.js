import { capitalize } from '../string';

/**
 * Create an array of mutations based on the provided array of strings (state keys)
 * Each state key is capitalized and prefixed with 'set'
 * 
 * @module
 * @param {attributes} - array os state keys (strings)
 * @return {Array} - array of mutations (functions)
 */
export default attributes => {
	const _mutations = {};
	attributes.forEach(attr => {
		_mutations['set' + capitalize(attr)] = (state, newValue) => {
			state[attr] = newValue;
		};
	});
	return _mutations;
};
