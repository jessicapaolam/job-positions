import { ValidationError } from 'yup';

interface Errors {
	[key: string]: string;
}

export default function getValidattionErrors(err: ValidationError): Errors {
	const validationErrors: Errors = {};

	err.inner.forEach(error => {
		validationErrors[error.path] = error.message;
	});

	return validationErrors;
}