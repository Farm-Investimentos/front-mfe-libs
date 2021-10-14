export default value => {
	const pattern = /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;
	return pattern.test(value) || false;
};
