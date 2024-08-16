"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteListById = exports.updateListById = exports.getListById = exports.addList = exports.getLists = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const listSchema_1 = __importDefault(require("../models/listSchema"));
// Get all Lists
const getLists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lists = yield listSchema_1.default.find();
        if (!lists) {
            const error = new Error("Lists not found");
            throw error;
        }
        res.status(200).json({
            message: "Get all the Lists",
            payload: lists,
        });
    }
    catch (error) {
        console.error("Error in /lists route:", error);
        next(error);
    }
});
exports.getLists = getLists;
// Add List
const addList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, date } = req.body;
        const newList = new listSchema_1.default({
            title: title,
            description: description,
            date: date,
        });
        yield newList.save();
        res.status(201).json({ message: "You added a new list", payload: newList });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.addList = addList;
// Get a single List by Id
const getListById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const list = yield listSchema_1.default.findById(id);
        res.status(200).json({ message: "Get List by id", payload: list });
    }
    catch (error) {
        if (error instanceof mongoose_1.default.Error.CastError) {
            const error = new Error(`Not a vaild id`);
            next(error);
        }
        else {
            next(error);
        }
    }
});
exports.getListById = getListById;
// Update List
const updateListById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedList = req.body;
        const updatedData = yield listSchema_1.default.findByIdAndUpdate(id, updatedList, {
            new: true,
        });
        if (!updatedData) {
            next(Error("List with this id not found"));
            return;
        }
        res
            .status(200)
            .json({ message: "You updated a List", payload: updatedData });
    }
    catch (error) {
        if (error instanceof mongoose_1.default.Error.CastError) {
            const error = new Error(`Not a vaild id`);
            next(error);
        }
        else {
            next(error);
        }
    }
});
exports.updateListById = updateListById;
// Delete List
const deleteListById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedList = yield listSchema_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: `You deleted a list with data:`,
            payload: deletedList,
        });
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
exports.deleteListById = deleteListById;
