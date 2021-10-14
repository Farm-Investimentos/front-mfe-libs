import RequestStatusEnum from '../../consts/RequestStatusEnum';
import gettersBuilder from './gettersBuilder';

const capitalize = s => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};

const mutationsBuilder = attributes => {
	const _mutations = {};
	attributes.forEach(attr => {
		_mutations['set' + capitalize(attr)] = (state, newValue) => {
			state[attr] = newValue;
		};
	});
	return _mutations;
};

const buildStateRequestStatus = keys => {
	let _state = {};
	keys.forEach(item => {
		_state[item] = RequestStatusEnum.IDLE;
	});
	return _state;
};

const fetchDefaultParser = (commit, _data, parser, key) => {
	const result = parser ? parser(_data) : _data;
	commit('set' + key, result);
	commit('set' + key + 'RequestStatus', RequestStatusEnum.SUCCESS);
	return { result };
};

const fetchDefaultParserPagination = (commit, data, parser, key) => {
	const result = parser ? data.data.content.map(item => parser(item)) : data.data.content;
	const totalPages = data.data.totalPages;

	commit('set' + key, result);
	commit('set' + key + 'TotalPages', totalPages);
	commit('set' + key + 'RequestStatus', RequestStatusEnum.SUCCESS);
	return { result, totalPages };
};

const dismissDefaultParserState = (commit, key) => {
	commit('set' + key, []);
	commit('set' + key + 'TotalPages', null);
	commit('set' + key + 'RequestStatus', RequestStatusEnum.IDLE);
	return true;
};

const resetListBuilder = _key => {
	const key = capitalize(_key);
	return {
		['setReset' + key]: state => {
			state[_key] = [];
			state[_key + 'TotalPages'] = null;
		},
	};
};

const buildBasicState = _keys => {
	let basicKeysState = {};
	_keys.forEach(key => (basicKeysState[key] = key.endsWith('List') ? [] : null));
	return basicKeysState;
};

const getFirstItemFromResponseArray = _data =>
	_data.data.content.length > 0 ? _data.data.content[0] : null;

const buildStateListResult = _keys => {
	let keysState = {};
	_keys.forEach(
		_key =>
			(keysState[_key] = {
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
