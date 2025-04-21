import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

export const createContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name should contain at least 3 characters',
    'string.max': 'Name can contain a maximum of 20 characters',
    'any.required': 'Name field is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]+$/)
    .min(10)
    .max(15)
    .required()
    .messages({
      'string.base': 'Phone number must be a string',
      'string.pattern.base': 'Phone number should include digits only',
      'string.min': 'Phone number is too short',
      'string.max': 'Phone number is too long',
      'any.required': 'Phone number is required',
    }),
  email: Joi.string().email().optional().messages({
    'string.email': 'Enter a valid email address',
  }),
  isFavourite: Joi.boolean().optional().default(false).messages({
    'boolean.base': 'isFavourite must be true or false',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .optional()
    .default('personal')
    .messages({
      'string.base': 'Contact type must be a string',
      'any.only':
        'Contact type must be one of the following: work, home, or personal',
    }),
  userId: Joi.string()
    .optional()
    .custom((value, helper) => {
      if (value && !isValidObjectId(value)) {
        return helper.message('User id should be a valid mongo id');
      }
      return true;
    }),
});

export const updateContactSchema = createContactsSchema
  .fork(
    ['name', 'phoneNumber', 'email', 'isFavourite', 'contactType'],
    (schema) => schema.optional(),
  )
  .min(1);
