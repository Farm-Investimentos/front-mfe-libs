import {
	defaultDateFormat,
	dateStringToISO,
	unFormatDate,
	formatDateRangeSetKeys,
} from './index';

describe('Helper Data', () => {
	describe('defaultDateFormat', () => {
		it('should return formatted date from string', () => {
			expect(defaultDateFormat('2020-09-01T00:00:00.000-0300')).toEqual(
				'01/09/2020'
			);
		});

		it('should check null', () => {
			expect(defaultDateFormat(null)).toBeNull();
		});
	});

	describe('dateStringToISO', () => {
		it('should return formatted date in ISO from string', () => {
			expect(dateStringToISO('01/09/2020')).toContain('2020-09-01T');
		});
	});

	describe('unFormatDate', () => {
		it('should return unFormatDate date', () => {
			expect(unFormatDate('20/09/2020')).toEqual('2020-09-20');
		});
	});

	it('Should format date and set in filter keys', () => {
		const obj = { filters: {} };
		formatDateRangeSetKeys(['2021-03-01', '2021-05-01'], 'teste', obj);
		expect(obj.filters.teste).toEqual('2021-03-01');
		expect(obj.filters.teste_fim).toEqual('2021-05-01');
		expect(obj.testeRange).toEqual('01/03/2021 a 01/05/2021');
	});

	it('Should format date and set in filter keys with only one', () => {
		const obj = { filters: {} };
		formatDateRangeSetKeys(['2021-05-01'], 'teste', obj);
		expect(obj.filters.teste).toEqual('2021-05-01');
		expect(obj.filters.teste_fim).toBeUndefined();
		expect(obj.testeRange).toEqual('01/05/2021');
	});
	it('Should format date and set in filter keys with sufixes', () => {
		const obj = { filters: {} };
		formatDateRangeSetKeys(['2021-03-01', '2021-05-01'], 'teste', obj, [
			'_inicio',
			'_final',
		]);
		expect(obj.filters.teste_inicio).toEqual('2021-03-01');
		expect(obj.filters.teste_final).toEqual('2021-05-01');
		expect(obj.testeRange).toEqual('01/03/2021 a 01/05/2021');
	});
});
