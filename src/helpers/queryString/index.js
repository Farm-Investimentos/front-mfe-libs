export default (filters, mappings) => Object.keys(filters)
	.map((key) => (mappings[key] ? mappings[key] : key) + '=' + filters[key]).join('&');
