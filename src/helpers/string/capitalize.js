/**
 * Capitalize a string
 * @module
 * @param {string} s - the string to be capitalized
 * @returns {string} new string, capitalized
 */
export default (s) => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};
