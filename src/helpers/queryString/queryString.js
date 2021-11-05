/**
 * Creates an query string based on an object and a list of keys used to transform the parameter
 * name into a parameter expected by the API
 * @module
 */
export default (filters, mappings) =>
	Object.keys(filters)
		.map(
			(key) => (mappings[key] ? mappings[key] : key) + '=' + filters[key],
		)
		.join('&');
