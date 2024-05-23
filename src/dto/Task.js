"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveTaskSchema = exports.deleteTaskSchema = exports.updateTaskSchema = exports.createTaskSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.createTaskSchema = {
    body: typebox_1.Type.Object({
        title: typebox_1.Type.String(),
        description: typebox_1.Type.String()
    }),
    params: typebox_1.Type.Object({
        taskListId: typebox_1.Type.Number()
    })
};
exports.updateTaskSchema = {
    body: typebox_1.Type.Object({
        title: typebox_1.Type.String(),
        description: typebox_1.Type.String()
    }),
    params: typebox_1.Type.Object({
        taskId: typebox_1.Type.Number(),
        taskListId: typebox_1.Type.Number()
    }),
};
exports.deleteTaskSchema = {
    params: typebox_1.Type.Object({
        taskId: typebox_1.Type.Number()
    }),
};
exports.moveTaskSchema = {
    body: typebox_1.Type.Object({
        targetTaskList: typebox_1.Type.Number()
    }),
    params: typebox_1.Type.Object({
        taskId: typebox_1.Type.Number(),
        taskListId: typebox_1.Type.Number()
    }),
};
