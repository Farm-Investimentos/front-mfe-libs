import actions from './actions';
const { updateInternalUser } = actions;

describe('userAccess actions', () => {
	let commitFn;

	beforeEach(() => {
		commitFn = jest.fn();
	});
	describe('updateInternalUser', () => {
		it('should commit', () => {
			updateInternalUser({ commit: commitFn }, true);
			expect(commitFn).toHaveBeenCalledWith('setInternalUser', true);
		});
	});
});
