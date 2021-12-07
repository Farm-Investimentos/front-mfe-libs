export function flatObject(obj) {
	const flatObject = {};
	const path = []; // current path

	function dig(obj) {
		if (obj !== Object(obj))
			/*is primitive, end of path*/
			return (flatObject[path.join('.')] = obj); /*<- value*/

		//no? so this is an object with keys. go deeper on each key down
		for (let key in obj) {
			path.push(key);
			dig(obj[key]);
			path.pop();
		}
	}

	dig(obj);
	return flatObject;
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

