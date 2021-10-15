/**
 * @module
 * FileSaver used to generate file from blob
 */

export const _fileSaver = (_window) => (data, type, name) => {
	const blob = new Blob([data], { type });
	const link = _window.document.createElement('a');
	link.href = _window.URL.createObjectURL ? _window.URL.createObjectURL(blob) : null;
	link.download = name;
	link.click();
	return link;
};

export default _fileSaver(window);
