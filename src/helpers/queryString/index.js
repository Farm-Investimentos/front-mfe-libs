export default (filters, mappings) => {
	return Object.keys(filters)
		.map(
			(key) => (mappings[key] ? mappings[key] : key) + '=' + filters[key]
		)
		.join('&');
};
