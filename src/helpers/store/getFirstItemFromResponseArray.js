/**
 * @module
 */
export default (data) => {
	if (data.data.content.length > 0) return data.data.content[0];
	return null;
};
