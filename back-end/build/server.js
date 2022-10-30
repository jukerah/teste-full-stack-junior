"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const port = 3333;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof Error)
        return res.status(400).json({ error: err.message });
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});
app.listen(port, () => {
    console.log(`Server up and running on port ${port}.`);
});
