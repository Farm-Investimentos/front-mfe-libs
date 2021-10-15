export default (attributes) => {
	const _getters = {};
	attributes.forEach((attr) => {
		_getters[attr] = (state) => state[attr];
	});
	return _getters;
};
