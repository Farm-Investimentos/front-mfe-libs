export default (valor, maximumFractionDigits = 2) => {
	if (valor !== 0 && !valor) {
		return null;
	}
	return parseFloat(valor)
		.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: maximumFractionDigits,
			maximumFractionDigits,
		})
		.replace(/\s/g, '');
};
