import actions from './actions';
const { updateCurrentFilters } = actions;

describe('search actions', () => {
	let commitFn;

	beforeEach(() => {
		commitFn = jest.fn();
	});
	describe('updateCurrentFilters', () => {
		it('should commit', () => {
			updateCurrentFilters({ commit: commitFn }, true);
			expect(commitFn).toHaveBeenCalled();
		});
	});
});
