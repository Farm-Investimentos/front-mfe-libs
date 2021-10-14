/**
 * @module
 * FileSaver used to generate file from blob 
 */

export const _fileSaver = _window => {
    return (data, type, name) => {
        let blob = new Blob([data], { type });
        let link = _window.document.createElement('a');
        link.href = _window.URL.createObjectURL ? _window.URL.createObjectURL(blob) : null;
        link.download = name;
        link.click();
        return link;
    };
};

export default _fileSaver(window);

