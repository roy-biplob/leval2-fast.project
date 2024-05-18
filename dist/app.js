"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const app = express();
exports.app = app;
app.get("/", (req, res) => {
    res.json({ message: 'hello biplob' });
});
