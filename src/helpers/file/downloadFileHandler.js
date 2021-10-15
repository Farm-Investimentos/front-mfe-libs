export default (url) => {
	const token = window.localStorage.getItem('Token');
	const href = baseURL + url + '&token=' + token;
	window.open(href, '_blank');

	return new Promise((resolve) => {
		resolve({
			data: {
				//No futuro terá um objeto com dados a serem apresentados
				content: 'Download do arquivo foi iniciado na aba aberta',
				status: 200,
			},
		});
	});
};
