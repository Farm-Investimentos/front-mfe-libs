/* eslint no-restricted-syntax: "error" */
/* eslint no-prototype-builtins: "error" */

export function flatObject(obj) {
	const flatObj = {};
	const path = [];

	function dig(objDig) {
		if (objDig !== Object(objDig)) {
			return (flatObj[path.join('.')] = objDig);
		}

		for (const key in objDig) {
			if (Object.prototype.hasOwnProperty.call(objDig, key)) {
				path.push(key);
				dig(objDig[key]);
				path.pop();
			}
		}
	}

	dig(obj);
	return flatObj;
}

export default (_vue, client) => {
	let flatFeaturesRules = {};
	_vue.mixin({
		methods: {
			async loadFeatures(name) {
				const { data } = await client.get(`/features/${name}.json`);
				flatFeaturesRules = flatObject(data);
			},
			isFeatureEnabled(key) {
				if (!key) {
					return true;
				}
				return flatFeaturesRules[key] || false;
			},
		},
	});
};
