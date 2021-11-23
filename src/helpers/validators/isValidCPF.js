/**
 * Validades if a string matches an document valid
 * @module
 * @param {string} value - the string to be matched
 * @returns {boolean} valid or not
 */

export default (cpf) => {
	if (cpf.length === 11) {
		cpf = cpf.split('');

		let v1 = 0;
		let v2 = 0;
		let aux = false;

		for (let i = 1; cpf.length > i; i += 1) {
			if (cpf[i - 1] !== cpf[i]) {
				aux = true;
			}
		}

		if (aux === false) {
			return false;
		}

		for (let i = 0, p = 10; (cpf.length - 2) > i; i += 1, p -= 1) {
			v1 += cpf[i] * p;
		}

		v1 = ((v1 * 10) % 11);

		if (v1 === 10) {
			v1 = 0;
		}

		const valor1 = parseInt(cpf[9], 10);

		if (v1 !== valor1) {
			return false;
		}

		for (let i = 0, p = 11; (cpf.length - 1) > i; i += 1, p -= 1) {
			v2 += cpf[i] * p;
		}

		v2 = ((v2 * 10) % 11);

		if (v2 === 10) {
			v2 = 0;
		}

		const valor2 = parseInt(cpf[10], 10);

		if (v2 !== valor2) {
			return false;
		}
		return true;
	}
};
