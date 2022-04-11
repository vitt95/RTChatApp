"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const express_validator_1 = require("express-validator");
/**
 * User validation input
 */
var userInput;
(function (userInput) {
    userInput["name"] = "name";
    userInput["lastname"] = "lastname";
    userInput["email"] = "email";
    userInput["dob"] = "dob";
    userInput["avatar"] = "avatar";
    userInput["password"] = "password";
})(userInput || (userInput = {}));
;
exports.validateUser = [
    (0, express_validator_1.body)(userInput.name).isString().isLength({ min: 3, max: 30 }),
    (0, express_validator_1.body)(userInput.lastname).isString().isLength({ max: 30 }),
    (0, express_validator_1.body)(userInput.dob).isDate(),
    (0, express_validator_1.body)(userInput.avatar).isBase64({ urlSafe: true }),
    (0, express_validator_1.body)(userInput.password).isStrongPassword({ minLength: 8, minUppercase: 1, minNumbers: 1 }),
    (0, express_validator_1.body)(userInput.email).isEmail(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];
