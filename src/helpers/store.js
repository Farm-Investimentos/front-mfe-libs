import RequestStatusEnum from '@farm-investimentos/front-mfe-components/dist/helpers/consts/RequestStatusEnum';

export const gettersBuilder = attributes => {
    const _getters = {};
    attributes.forEach(attr => {
        _getters[attr] = state => {
            return state[attr];
        };
    });
    return _getters;
};

export const capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export const mutationsBuilder = attributes => {
    const _mutations = {};
    attributes.forEach(attr => {
        _mutations['set' + capitalize(attr)] = (state, newValue) => {
            state[attr] = newValue;
        };
    });
    return _mutations;
};

export const buildStateRequestStatus = keys => {
    let _state = {};
    keys.forEach(item => {
        _state[item] = RequestStatusEnum.IDLE;
    });
    return _state;
};

export const _fetchDefaultParser = (commit, _data, parser, key) => {
    const result = parser ? parser(_data) : _data;
    commit('set' + key, result);
    commit('set' + key + 'RequestStatus', RequestStatusEnum.SUCCESS);
    return { result };
};

export const _fetchDefaultParserPagination = (commit, data, parser, key) => {
    const result = parser ? data.data.content.map(item => parser(item)) : data.data.content;
    const totalPages = data.data.totalPages;

    commit('set' + key, result);
    commit('set' + key + 'TotalPages', totalPages);
    commit('set' + key + 'RequestStatus', RequestStatusEnum.SUCCESS);
    return { result, totalPages };
};

export const _dismissDefaultParserState = (commit, key) => {
    commit('set' + key, []);
    commit('set' + key + 'TotalPages', null);
    commit('set' + key + 'RequestStatus', RequestStatusEnum.IDLE);
    return true;
};

export const resetListBuilder = _key => {
    const key = capitalize(_key);
    return {
        ['setReset' + key]: state => {
            state[_key] = [];
            state[_key + 'TotalPages'] = null;
        },
    };
};

export const buildBasicState = _keys => {
    let basicKeysState = {};
    _keys.forEach(key => (basicKeysState[key] = key.endsWith('List') ? [] : null));
    return basicKeysState;
};

export const getFirstItemFromResponseArray = _data =>
    _data.data.content.length > 0 ? _data.data.content[0] : null;

export const buildStateListResult = _keys => {
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
