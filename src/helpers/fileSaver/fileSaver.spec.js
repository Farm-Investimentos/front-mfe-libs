/**
 * @jest-environment jsdom
 */
import { _fileSaver } from './';

describe('FileSaver', () => {
	it('should return formatted date from string', () => {
		const r = _fileSaver({
			document: {
				createElement: () => ({}),
			},
			URL: {
				createObjectURL: () => ({}),
			},
		});
		expect(r).toBeDefined();
	});
});
