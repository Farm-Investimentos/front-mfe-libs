/**
 * @jest-environment jsdom
 */
import localStorageWrapper from './';

describe('localStorageWrapper', () => {
	it('should build the wrapper', () => {
		expect(localStorageWrapper).toBeDefined();
		expect(localStorageWrapper.getItem).toBeDefined();
	});
});
