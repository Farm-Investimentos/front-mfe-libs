export default attributes => {
	const _getters = {};
	attributes.forEach(attr => {
		_getters[attr] = state => {
			return state[attr];
		};
	});
	return _getters;
};
