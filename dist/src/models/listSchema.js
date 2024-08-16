"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const mongoose_1 = require("mongoose");
const listSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.List = (0, mongoose_1.model)('Lis', listSchema);
exports.default = exports.List;
