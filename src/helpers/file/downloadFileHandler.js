export default (url) => {
	const token = window.localStorage.getItem('Token');
	const href = `${url}&token=${token}`;
	window.open(href, '_blank');

	return new Promise((resolve) => {
		resolve({
			data: {
				content: 'Download do arquivo foi iniciado na aba aberta',
				status: 200,
			},
		});
	});
};
