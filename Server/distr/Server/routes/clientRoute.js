"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientController_1 = require("../controllers/clientController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', clientController_1.getClients);
router.get('/:id', clientController_1.getClient);
exports.default = router;
