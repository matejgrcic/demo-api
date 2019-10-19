import { ValidationChain } from 'express-validator';

enum ValidationErrorMessages {
    EmailFormIncorrect = 'Email must be in correct form',
    EmailIsRequired = 'Email is required',
    PasswordIsRequired = 'Password is required',
    PasswordIsString = 'Password should be string',
}

export const validatePassword = (validator: Function): ValidationChain => (
    validator('password')
        .exists({ checkNull: true })
        .not()
        .isEmpty()
        .withMessage(ValidationErrorMessages.PasswordIsRequired)
        .isString()
        .withMessage(ValidationErrorMessages.PasswordIsString)
);

export const validateEmail = (validator: Function): ValidationChain => (
    validator('email')
        .exists({ checkNull: true })
        .not()
        .isEmpty()
        .withMessage(ValidationErrorMessages.EmailIsRequired)
        .isEmail()
        .withMessage(ValidationErrorMessages.EmailFormIncorrect)
);
