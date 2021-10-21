export default (valor, maximumFractionDigits = 2) => {
	if (valor !== 0 && !valor) {
		return null;
	}
	return new Intl.NumberFormat('pt-BR', {
		minimumFractionDigits: maximumFractionDigits,
		maximumFractionDigits,
	}).format(parseFloat(valor));
};
