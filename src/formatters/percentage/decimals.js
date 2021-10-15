export default (value1, value2, decimals = 1) => {
	if (value1 === 0 || value2 === 0) {
		return 0;
	}
	const p = (value1 / value2) * 100;
	if (Number.isNaN(p)) {
		return '0';
	}
	if (Math.round(p) === p) {
		return p;
	}
	return p.toFixed(decimals);
};
