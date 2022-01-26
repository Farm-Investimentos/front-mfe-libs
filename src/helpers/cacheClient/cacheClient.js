const _defaultCacheValidity = 30;


import isCacheValid from './isCacheValid';

export default function (client) {
	const _cacheStorage = {};

	return {
		get: async (url, cacheValidity) => {
			const _date = new Date();
			const _cachedDataItem = _cacheStorage[url];

			if (
				!isCacheValid(
					_cachedDataItem,
					_date,
					cacheValidity ? cacheValidity : _defaultCacheValidity
				)
			) {
				try {
					const response = await client.get(url);
					_cacheStorage[url] = { response, date: _date };
					return new Promise(resolve => resolve(response));
				} catch (e) {
					return new Promise((_, reject) => reject(e));
				}
			} else {
				return new Promise(resolve => resolve(_cachedDataItem.response));
			}
		},
	};
}
