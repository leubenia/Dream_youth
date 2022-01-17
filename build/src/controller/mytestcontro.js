"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test1 = async (req, res) => {
    return res.status(200).send("test1 OK");
};
const test2 = async (req, res) => {
    return res.status(200).send({ test: "OK" });
};
const istest = { test1, test2 };
exports.default = istest;
//# sourceMappingURL=mytestcontro.js.map