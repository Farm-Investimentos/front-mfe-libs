export default (message) => new Promise((resolve, reject) => {
	navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
		if (result.state === 'granted' || result.state === 'prompt') {
			navigator.clipboard.writeText(message).then(
				() => {
					resolve();
				},
				() => {
					reject();
				},
			);
		}
	});
});
