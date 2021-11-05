import axiosWrapper from './';

describe('axiosWrapper', () => {
	it('Should return an object', () => {
		const client = axiosWrapper(
			{
				create: ({ baseURL}) => ({
                    baseURL,
					interceptors: {
						request: {
							use: () => ({}),
						},
                        response: {
							use: () => ({}),
						},
					},
				}),
			},
			{},
			'https://localhost:8080/',
		);
		expect(client).toBeDefined();
        expect(client.baseURL).toBe('https://localhost:8080/');
	});
});
