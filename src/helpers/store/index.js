import RequestStatusEnum from '../../consts/RequestStatusEnum';
import gettersBuilder from './gettersBuilder';
import mutationsBuilder from './mutationsBuilder';
import resetListBuilder from './resetListBuilder';

const buildStateRequestStatus = (keys) => {
	const _state = {};
	keys.forEach((item) => {
		_state[item] = RequestStatusEnum.IDLE;
	});
	return _state;
};

const fetchDefaultParser = (commit, _data, parser, key) => {
	const result = parser ? parser(_data) : _data;
	commit(`set${key}`, result);
	commit(`set${key}RequestStatus`, RequestStatusEnum.SUCCESS);
	return { result };
};

const fetchDefaultParserPagination = (commit, data, parser, key) => {
	const result = parser ? data.data.content.map((item) => parser(item)) : data.data.content;
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

const buildBasicState = (_keys) => {
	const basicKeysState = {};
	_keys.forEach((key) => (basicKeysState[key] = key.endsWith('List') ? [] : null));
	return basicKeysState;
};

const getFirstItemFromResponseArray = (_data) => (_data.data.content.length > 0 ? _data.data.content[0] : null);

const buildStateListResult = (_keys) => {
	const keysState = {};
	_keys.forEach(
		(_key) => (keysState[_key] = {
			results: [],
			totalPages: null,
			total: null,
		}),
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
