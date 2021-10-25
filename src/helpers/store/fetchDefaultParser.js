/**
 * Action used to parse data with a DTO helper function
 * and mutate the state and a request state, based on
 * a state key
 * @param {commit} - the store's commit function
 * @param {data} - the data to be parsed
 * @param {parser} - the parser function
 * @param {key} - the state's key
 */
export default (commit, data, parser, key) => {
	const result = parser ? parser(data) : data;
	commit(`set${key}`, result);
	commit(`set${key}RequestStatus`, 'SUCCESS');
	return { result };
};
