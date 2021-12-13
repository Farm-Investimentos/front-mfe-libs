import { capitalize } from '../string';

/**
 * Create a mutation to reset state values from a lists (the list and TotalPages);
 * Based on the state key provided, updated the state
 * @module
 * @param {string} key - key from the state represnting the list and its totalPages
 */
export default (key) => {
	const keyCapitalized = capitalize(key);
	return {
		[`setReset${keyCapitalized}`]: (state) => {
			state[key] = [];
			state[`${key}TotalPages`] = null;
		},
	};
};
