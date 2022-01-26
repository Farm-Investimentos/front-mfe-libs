import isCacheValid from './isCacheValid';

const defaultCacheValidity = 30;

export default function (client) {
	const cacheStorage = {};

	return {
		get: async (url, cacheValidity) => {
			const date = new Date();
			const cachedDataItem = cacheStorage[url];

			const isValid = isCacheValid(
				cachedDataItem,
				date,
				cacheValidity || defaultCacheValidity,
			);

			if (!isValid) {
				try {
					const response = await client.get(url);
					cacheStorage[url] = { response, date };
					return new Promise((resolve) => resolve(response));
				} catch (e) {
					return new Promise((_, reject) => reject(e));
				}
			} else {
				return new Promise((resolve) => {
					resolve(cachedDataItem.response);
				});
			}
		},
	};
}
