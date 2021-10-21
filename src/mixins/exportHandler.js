const exportHandler = {
	methods: {
		async exportHandler(callback) {
			const dialogInstance = await this.$dialog.info({
				text: 'O download do arquivo será iniciado em uma nova aba. Para continuar usando a plataforma, você terá que retornar manualmente.',
				title: 'Download',
				icon: false,
				actions: {},
				waitForResult: false,
			});
			setTimeout(() => {
				dialogInstance.close();
				callback();
			}, 2000);
		},
	},
};

export default exportHandler;
