/**
 * @module
 * FileSaver used to generate file from blob
 */

export const fileSaver = (windowWrapper) => (data, type, name) => {
	const blob = new Blob([data], { type });
	const link = windowWrapper.document.createElement('a');
	link.href = windowWrapper.URL.createObjectURL ? windowWrapper.URL.createObjectURL(blob) : null;
	link.download = name;
	link.click();
	return link;
};

export default fileSaver(window);
