const pageable = {
	methods: {
		onChangeLimitPerPage(newLimit) {
			this.filters.limit = newLimit;
			this.redoSearchFirstPage();
		},
		onChangePage(newPage) {
			this.filters.page = newPage - 1;
			this.doSearch();
		},
		redoSearchFirstPage() {
			if (this.filters.page != 0) {
				this.filters.page = 0;
				return;
			}
			this.doSearch();
		},
		searchListener(data) {
			const value = this.filters[this.filterInputKey] || '';
			this.filters = {
				...data,
				limit: this.lastSearchFilters.limit,
				page: this.lastSearchFilters.page,
			};
			this.filters[this.filterInputKey] = value;
			this.redoSearchFirstPage();
		},
		filterInputChanged(value) {
			this.filters[this.filterInputKey] = value;
			if (value.length >= 3 || value === '') {
				this.redoSearchFirstPage();
			}
		},
	},
};

export default pageable;
