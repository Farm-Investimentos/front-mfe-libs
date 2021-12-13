import { capitalize } from '../string';

/**
 * Create an array of mutations based on the provided array of strings (state keys)
 * Each state key is capitalized and prefixed with 'set'
 * @module
 * @param {Array<string>} attributes - state keys
 * @return {Array<Function>} - mutations
 */
export default (attributes) => {
	const mutations = {};
	attributes.forEach((attr) => {
		mutations[`set${capitalize(attr)}`] = (state, newValue) => {
			state[attr] = newValue;
		};
	});
	return mutations;
};
