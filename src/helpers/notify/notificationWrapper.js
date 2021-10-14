import notification from './notification';
/**
 * Notify success or error event, wrapping notification function
 *
 * @module
 * @param {value} - string or object with the notification type
 * @param {successLabel} - success label
 * @param {errorLabel} - error label
 */
export default (value, successLabel, errorLabel) => {
	if (value.type === 'ERROR') {
		notification('ERROR', 'Ocorreu um erro ao ' + errorLabel + ': ' + value.message);
		return 'ERROR';
	}
	if (value === 'SUCCESS' || value.type === 'SUCCESS') {
		notification('SUCCESS', successLabel + ' com sucesso');
		return 'SUCCESS';
	}
};
