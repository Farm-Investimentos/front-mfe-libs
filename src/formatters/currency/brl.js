export default (valor, maximumFractionDigits = 2) => {
	if (valor !== 0 && !valor) {
		return null;
	}
	return parseFloat(valor)
		.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
			minimumFractionDigits: maximumFractionDigits,
			maximumFractionDigits,
		})
		.replace(/\s/g, '');
};
