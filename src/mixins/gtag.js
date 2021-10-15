const gtagMixins = (origin) => ({
	methods: {
		tagExportEvent({ page, format }) {
			this.$gtag.event('export', {
				format,
				page,
				origin,
			});
		},
	},
});

export { gtagMixins };
