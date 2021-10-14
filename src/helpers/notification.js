import RequestStatusEnum from '@farm-investimentos/front-mfe-components/dist/helpers/consts/RequestStatusEnum';

export const notification = (type, message) => {
    const customEvent = new CustomEvent(type, {
        detail: {
            origin: 'credito',
            message: message,
        },
    });
    window.dispatchEvent(customEvent);
};

export const defaultRequestStatusNotify = (value, successLabel, errorLabel) => {
	if (value.type === RequestStatusEnum.ERROR) {
		notification(
			RequestStatusEnum.ERROR,
			'Ocorreu um erro ao ' + errorLabel + ': ' + value.message
		);
		return RequestStatusEnum.ERROR;
	}
	if (value === RequestStatusEnum.SUCCESS) {
		notification(RequestStatusEnum.SUCCESS, successLabel + ' com sucesso');
		return RequestStatusEnum.SUCCESS;
	}
};