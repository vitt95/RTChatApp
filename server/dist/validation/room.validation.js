"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRoom = void 0;
/**
 * Room validation input
 */
const express_validator_1 = require("express-validator");
var RoomInput;
(function (RoomInput) {
    RoomInput["roomName"] = "roomName";
    RoomInput["name"] = "name";
    RoomInput["topic"] = "topic";
})(RoomInput || (RoomInput = {}));
;
exports.validateRoom = [
    (0, express_validator_1.body)(RoomInput.roomName).escape(),
    (0, express_validator_1.body)(RoomInput.name).escape(),
    (0, express_validator_1.body)(RoomInput.topic).escape(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];
