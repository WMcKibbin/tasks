"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const PrismaMockContext_1 = __importDefault(require("../../src/ioc/PrismaMockContext"));
(0, globals_1.describe)("Task Service Unit Tests --> Task List", () => {
    const taskService = PrismaMockContext_1.default.resolve("taskService");
    const prisma = PrismaMockContext_1.default.resolve("prisma");
    //getTaskList unit tests
    (0, globals_1.test)("Execute findUnique and return value", () => {
        const tasklist = {
            id: 1,
            name: "Task List 1",
            tasks: [],
        };
        prisma.tasklist.findUnique.mockResolvedValue(tasklist);
        taskService.getTaskList(1).then((result) => {
            (0, globals_1.expect)(result).toBe(tasklist);
        });
    });
    (0, globals_1.test)("Execute findUnique and return null", () => {
        prisma.tasklist.findUnique.mockResolvedValue(null);
        taskService.getTaskList(1).then((result) => {
            (0, globals_1.expect)(result).toBe(null);
        });
    });
    (0, globals_1.test)("Execute findUnique and include tasks", () => {
        const tasklist = {
            id: 1,
            name: "Task List 1",
            tasks: [],
        };
        //spy on the findUnique method and check if include is used
        prisma.tasklist.findUnique.mockResolvedValue(tasklist);
        const spy = jest.spyOn(prisma.tasklist, "findUnique");
        taskService.getTaskList(1).then(() => {
            (0, globals_1.expect)(spy).toHaveBeenCalledWith({
                where: {
                    id: 1,
                },
                include: {
                    tasks: true,
                },
            });
        });
    });
});
