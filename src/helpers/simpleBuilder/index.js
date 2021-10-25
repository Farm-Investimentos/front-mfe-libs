export default (defaultKeys) => (rawData) => Object.fromEntries(
	Object.keys(defaultKeys).map((key) => [[defaultKeys[key]], rawData[key]]));
