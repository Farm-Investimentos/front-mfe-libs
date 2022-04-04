export default {
	updateCurrentFilters({ commit }, { key, filters, showFilters }) {
		commit('setCurrentFilters', { key, filters, showFilters });
	},
};
