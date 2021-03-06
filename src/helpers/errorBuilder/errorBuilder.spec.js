import errorBuilder from './';

describe('ErrorBuilder', () => {
	it('Should return error for timeout/abort', () => {
		const r = errorBuilder({
			code: 'ECONNABORTED',
		});
		expect(r.code).toEqual('ECONNABORTED');
		expect(r.message).toEqual('timeout');
	});

	it('Should return error', () => {
		const r = errorBuilder({
			response: {
				status: 401,
			},
		});
		expect(r.httpStatus).toEqual(401);
	});

	it('Should return error', () => {
		const r = errorBuilder({
			response: {
				status: 401,
				data: {
					data: 'some error',
				},
			},
		});
		expect(r.message).toEqual('some error');
	});

	it('Should return complex error ', () => {
		const r = errorBuilder({
			response: {
				status: 401,
				data: {
					data: { message: 'some error' },
				},
			},
		});
		expect(r.message).toEqual('some error');
	});

	it('Should return error for array', () => {
		const r = errorBuilder({
			response: {
				status: 401,
				data: {
					errors: ['some error', 'some error'],
				},
			},
		});
		expect(r.message).toEqual('some error. some error');
	});
});
