/**
 * @jest-environment jsdom
 */
import downloadFileHandler from './downloadFileHandler';

describe('downloadFileHandler', () => {
	beforeEach(() => {
		window.open = jest.fn();
	});
	afterEach(() => {
		window.open.mockClear();
	});
	it('should return a promise', () => {
		const r = downloadFileHandler('some url');
		expect(r).toBeDefined();
	});
});
