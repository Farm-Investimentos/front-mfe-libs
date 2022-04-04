export default {

	currentFiltersFromKey: (state) => (key) => {
		if (!state.currentFilters) {
			return null;
		}
		if (state.currentFilters.key !== key) {
			return null;
		}
		const { filters, showFilters } = state.currentFilters;
		return { filters, showFilters };
	},

};
