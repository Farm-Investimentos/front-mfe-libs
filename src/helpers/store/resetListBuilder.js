import { capitalize } from '../string';

/**
 * Create a mutation to reset state values from a lists (the list and TotalPages);
 * Based on the state key provided, updated the state 
 */
export default _key => {
	const key = capitalize(_key);
	return {
		['setReset' + key]: state => {
			state[_key] = [];
			state[_key + 'TotalPages'] = null;
		},
	};
};
