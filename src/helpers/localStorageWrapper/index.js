/**
 * Wrapper for the browser localStorage, leveraing its features
 * and enhancing them (such as JSON parse/stringify for stored values)
 * @param {storage} - a storage object that implements same interface from local storage
 * @returns {Object} - an storage object
 */
export const localStorageWrapper = (storage) => {
	function getItem(key, defaultValue) {
		const item = storage.getItem(key) || defaultValue;

		try {
			return JSON.parse(item);
		} catch (e) {
			return item;
		}
	}

	function setItem(key, value) {
		try {
			if (typeof value === 'string') {
				storage.setItem(key, value);
			} else {
				storage.setItem(key, JSON.stringify(value));
			}
			return true;
		} catch (e) {
			return false;
		}
	}

	function clearKey(key) {
		return storage.removeItem(key);
	}

	function clear() {
		return storage.clear();
	}

	return {
		getItem,
		setItem,
		clear,
		clearKey,
	};
};

export default localStorageWrapper(localStorage);
