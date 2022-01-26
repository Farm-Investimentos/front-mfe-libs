export default (_item, _date, _cacheValidity) => {
	if (!_item || !_item.response || !_item.date) {
		return false;
	}

	const diffTime = Math.round(
		(_date.getTime() - _item.date.getTime()) / 1000,
	);

	return diffTime < _cacheValidity;
};
