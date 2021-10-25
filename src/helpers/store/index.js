import RequestStatusEnum from '../../consts/RequestStatusEnum';
import gettersBuilder from './gettersBuilder';
import mutationsBuilder from './mutationsBuilder';
import resetListBuilder from './resetListBuilder';
import fetchDefaultParser from './fetchDefaultParser';

const buildStateRequestStatus = (keys) => {
	const state = {};
	keys.forEach((item) => {
		state[item] = RequestStatusEnum.IDLE;
	});
	return state;
};

const fetchDefaultParserPagination = (commit, data, parser, key) => {
	const result = parser
		? data.data.content.map((item) => parser(item))
		: data.data.content;
	const { totalPages } = data.data;

	commit(`set${key}`, result);
	commit(`set${key}TotalPages`, totalPages);
	commit(`set${key}RequestStatus`, RequestStatusEnum.SUCCESS);
	return { result, totalPages };
};

const dismissDefaultParserState = (commit, key) => {
	commit(`set${key}`, []);
	commit(`set${key}TotalPages`, null);
	commit(`set${key}RequestStatus`, RequestStatusEnum.IDLE);
	return true;
};

const buildBasicState = (keys) => {
	const basicKeysState = {};
	keys.forEach(
		(key) => (basicKeysState[key] = key.endsWith('List') ? [] : null)
	);
	return basicKeysState;
};

const getFirstItemFromResponseArray = (_data) =>
	_data.data.content.length > 0 ? _data.data.content[0] : null;

const buildStateListResult = (keys) => {
	const keysState = {};
	keys.forEach(
		(key) =>
			(keysState[key] = {
				results: [],
				totalPages: null,
				total: null,
			})
	);
	return keysState;
};

export {
	gettersBuilder,
	mutationsBuilder,
	buildStateRequestStatus,
	fetchDefaultParser,
	fetchDefaultParserPagination,
	dismissDefaultParserState,
	resetListBuilder,
	buildBasicState,
	getFirstItemFromResponseArray,
	buildStateListResult,
};
