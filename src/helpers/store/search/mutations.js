export default {
	setCurrentFilters(state, { key, filters, showFilters }) {
		state.currentFilters = { key, filters, showFilters };
	},
};
