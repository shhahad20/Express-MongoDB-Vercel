"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeController_js_1 = require("../controllers/homeController.js");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', homeController_js_1.home);
exports.default = router;
