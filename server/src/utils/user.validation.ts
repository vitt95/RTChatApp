import { body, validationResult } from 'express-validator';
/**
 * User validation input
 */

enum userInput {
  name = 'name',
  lastname = 'lastname',
  email = 'email',
  dob = 'dob',
  avatar = 'avatar',
  password = 'password'
};

export const validateUser = [
  body(userInput.name).isString().isLength({min: 3, max: 30}),
  body(userInput.lastname).isString().isLength({max: 30}),
  body(userInput.dob).isDate(),
  body(userInput.avatar).isBase64({urlSafe: true}),
  body(userInput.password).isStrongPassword({minLength: 8, minUppercase: 1, minNumbers: 1}),
  body(userInput.email).isEmail(),

  (req: ExpressReq, res: ExpressRes, next: Function) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({errors: errors.array()});
    }
    next();
  }

]
