const pageable = {
	data() {
		return {
			canDoSearch: true,
		};
	},
	methods: {
		onChangeLimitPerPage(newLimit) {
			this.filters.limit = newLimit;
			if (this.canDoSearch) this.redoSearchFirstPage();
		},
		onChangePage(newPage) {
			this.filters.page = newPage - 1;
			if (this.canDoSearch) this.doSearch();
		},
		redoSearchFirstPage() {
			if (this.filters.page !== 0) {
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
		enableSearch() {
			this.canDoSearch = true;
		},
		disableSearch() {
			this.canDoSearch = false;
		},
		checkStateOnMount(key) {
			if (!this.hasQueryParams()) {
				return false;
			}
			const currentFilters = this.currentFiltersFromKey(key);
			if (currentFilters) {
				this.disableSearch();
				const filters = {
					...currentFilters.filters,
					page: currentFilters.filters.page,
				};
				this.filters = { ...filters };
				this.initFiltersValues = { ...filters };
				this.filter = currentFilters.showFilters;

				this.$nextTick(() => {
					this.enableSearch();
				});
				return true;
			}
			return false;
		},
		checkUrlQueryOnMount() {
			if (this.$route.query && this.$route.query.page) {
				this.filters = {
					...this.$route.query,
					page: parseInt(this.$route.query.page, 10),
					limit: parseInt(this.$route.query.limit, 10),
				};

				if (this.hasSort) {
					this.hasSort.orderby = this.$route.query.orderby;
					this.hasSort.order = this.$route.query.order;
				}

				return true;
			}
			return false;
		},
		hasQueryParams() {
			return Object.keys(this.$route.query).length > 0;
		},
		updateQueryInUrl() {
			const obj = {};
			Object.keys(this.filters).forEach((key) => {
				const value = this.filters[key];
				if (Array.isArray(value)) {
					return (obj[key] = value.join(',').toString());
				}
				if (value !== undefined) obj[key] = value.toString();
			});
			if (this.hasSort) {
				obj.orderby = this.hasSort.orderby;
				obj.order = this.hasSort.order;
			}

			if (JSON.stringify(obj) !== JSON.stringify(this.$route.query)) {
				this.$router.replace({
					path: this.$route.path,
					query: { path: this.$route.query.path, ...obj },
				});
			}
		},
	},
	computed: {
		currentPage: {
			get() {
				return this.filters.page + 1;
			},
		},
	},
};

export default pageable;
