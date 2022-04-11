"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeHtmlSanitze = void 0;
/**
 * Escaping & Sanitze Middleware input.
 */
const express_validator_1 = require("express-validator");
function escapeHtmlSanitze(req, res, next) {
    console.log('Escape middleware...');
    req.body.roomName = (0, express_validator_1.body)('roomName').escape();
    next();
}
exports.escapeHtmlSanitze = escapeHtmlSanitze;
