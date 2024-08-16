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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const homeRouter_js_1 = __importDefault(require("../src/routers/homeRouter.js"));
const listRouter_js_1 = __importDefault(require("../src/routers/listRouter.js"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI;
// You have to add this line or you will get an error
if (!db) {
    throw new Error('MONGODB_URI is not defined in environment variables');
}
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(db);
        console.log('Database connected');
    }
    catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit process with failure
    }
});
// Connect to the database once when the server starts
connectDB();
app.use(express_1.default.json());
// fLf4lkHV4SpwgAHm
// Serves static files from the public directory.
app.use('/public', express_1.default.static("public"));
// This middleware parses incoming requests with URL-encoded payloads.
app.use(express_1.default.urlencoded({ extended: true }));
// Not using mongoDB
app.use('/', homeRouter_js_1.default);
// Using mongoDB
app.use('/lists', listRouter_js_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
