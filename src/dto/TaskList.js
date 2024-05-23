"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskListSchema = exports.deleteTaskListSchema = exports.createTaskListSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.createTaskListSchema = {
    body: typebox_1.Type.Object({
        name: typebox_1.Type.String(),
    }),
};
exports.deleteTaskListSchema = {
    params: typebox_1.Type.Object({
        taskListId: typebox_1.Type.Number(),
    }),
};
exports.getTaskListSchema = {
    params: typebox_1.Type.Object({
        taskListId: typebox_1.Type.Number(),
    }),
};
